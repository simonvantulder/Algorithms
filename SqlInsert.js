/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string

  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: true,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(n).
 * - Space: O(n).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */
function insert(tableName, columnValuePairs) {
  columnStr = `INSERT INTO ${tableName} (`;
  valuesStr = `) VALUES (`
  for(key in columnValuePairs){
    columnStr+= `${key}, `;
    if(typeof columnValuePairs[key] === "string"){
      valuesStr+= `'${columnValuePairs[key]}', `;
    }
    else if(typeof columnValuePairs[key] === "boolean"){
      if(columnValuePairs[key] === true){
        valuesStr+= `1, `;
      }else{
        valuesStr+= `0, `;
      }
    }else{
      valuesStr+= `${columnValuePairs[key]}, `;

    }
  }
  //remove trailling comma & space
  //could instead prepend a comma and space if(columnString === `INSERT INTO ${tableName} (`)
  columnStr = columnStr.substring(0, columnStr.length - 2);
  valuesStr = valuesStr.substring(0, valuesStr.length - 2);

  return columnStr + valuesStr + ')';
}

/**
 * - Time: O(?).
 * - Space: O(?).
 */
function insertFunctional(tableName, columnValuePairs) {
  const columns = Object.keys(columnValuePairs).join(", ");

  const values = Object.values(columnValuePairs)
    .map((val) => (typeof val === "string" ? `'${val}'` : typeof val === "boolean" ? val === true ? `1` :`0` : val))
    .join(", ");
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}
console.log(insertFunctional(table, insertData2));  