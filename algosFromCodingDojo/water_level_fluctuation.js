/**
 * From an interview on 2/8/21. encodeStr algo was also given (aaabbcdd => a3b2cd2)
 *
 * The interviewee mentioned it was mostly a comprehension style question.
 *
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
function measureWaterLevels(waterLevels) { 
    let min = waterLevels[0];
    let minIdx = 0;
    let max = waterLevels[0];
    let maxIdx = 0;
    let maxRise = -1;
    // console.log(min)
    // console.log(max);
    for(var i = 0; i < waterLevels.length; i++){
        // console.log(i)
        if(waterLevels[i] < min){
            min = waterLevels[i];
            minIdx = i;
            console.log(min + " = min")
            if(minIdx > maxIdx){
                max = min;
            }
        }
        if(waterLevels[i] > max){
            max = waterLevels[i];
            maxIdx = i;
            console.log(max + " = max")

        }
        if(minIdx < maxIdx && min < max && max-min > maxRise){
            maxRise = max-min;
            console.log(maxRise)
        }


    }
    
    return "max rise is = " + maxRise;

}

console.log( measureWaterLevels(riverLevels6));