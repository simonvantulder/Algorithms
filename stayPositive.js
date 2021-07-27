function minStart(arr) {
    //need a running total
    /* need a starting value, start with min number neccessary to keep the starting num positive. 
     * increment from there if necessary
    */
    if(arr.length === 0){
        return arr;
    }
    let minStartVal = 1 - arr[0];
    let runningTotal = minStartVal;
    

    // console.log("minStartVal =", minStartVal);
    // console.log("enter loop");

    for(let i = 0 ; i < arr.length; i++){
        runningTotal+= arr[i]
        // console.log(arr[i], runningTotal);
        if(runningTotal < 1) {
            console.log("runningtotal = ", runningTotal);
            let oldStartVal = minStartVal;
            minStartVal += 1 - runningTotal; //running total is already negative-> two negs = positive
            runningTotal += minStartVal - oldStartVal ;
            console.log("runningtotal now = ", runningTotal, "minstart = ", minStartVal);

        }  
    }
    console.log("minstart = ", minStartVal, "runningtotal = ", runningTotal);
    return minStartVal
}

minStart([10,-5,4,-2,3,1,-1,-6,-1,0,8]);
