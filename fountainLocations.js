function fountainActivation(locations){
    // need to find the fewest # fountains that cover the entire garden
    // ith fountain (1<= i <= locations.length) has coverage limit locations[i] w/ max (i-locations[i],1) & min ((i+locations[i])), locations.length)
    
    for (let i = 0; i < locations.length; i++) {
        let element = locations[i];
        let xMax = i - locations[i];
        let xMin = i + locations[i];
        let yMin = locations.length
    }
}