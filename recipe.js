function cakes(recipe, available) {

    if(Object.keys(recipe).length === 0 || Object.keys(recipe).length === 0){
        return 0;
    }
    let recipeBatches = Infinity;
    for (let i in recipe) {
        if(available.hasOwnProperty(i)){
            if (available[i] < recipe[i]){
                return 0
            } else { //have enough
                if ((available[i] / recipe[i]) < recipeBatches){
                    recipeBatches = Math.floor(available[i] / recipe[i]);
                }
            }
        } else{
            return 0
        }
    }
    return recipeBatches
}

// must return 2
console.log( cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
// must return 0
// console.log( cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 
