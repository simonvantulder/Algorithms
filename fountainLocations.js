//test

function fountainActivation(locations){
    // need to find the fewest # fountains that cover the entire garden
    // ith fountain (1<= i <= locations.length) has coverage limit locations[i] w/ max (i-locations[i],1) & min ((i+locations[i])), locations.length)

    // Initialize a variable countFountain to store the minimum number of fountains that need to be activated.
    let countFountain = 0
    //stores the max range of the fountain
    let xMax = 0 - locations[0];

    //stores the min range of the current fountain
    let xMin = 0 + locations[0];
    //steps:
    // loop through the array and for every ith fountain, find the rightmost fountain which still covers the start.
    for (let i = 0; i < locations.length; i++) {
        if(i + locations[i] <= xMin && i - locations[i] > xMax){
            xMin = i + locations[i];
            countFountain++;
        }
    }
    // Then, find the rightmost fountain that the rightmost fountain obtained in the above step covers up to and update it.
    while()

    // Now, traverse the array and keep activating the fountains from left to right that covers maximum fountains currently on the right and increment countFountain by 1. 
    
}