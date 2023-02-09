// mindGame() function will take a peramitar as a number and after some calculation it will return the result as per the instraction and as per the sample input and output as well.
function mindGame(number){
    if(typeof number !== "number"){
    return "Sorry! only number are allowd for this calculation"
    }
    let multiply = number * 3;
    let sum = multiply + 10;
    let divide = sum / 2;
    let subtraction = divide - 5;
    return subtraction;
    };
    // evenOdd() function will take a String as peramiter and in return it will tell you that the length of the String is a even number or a odd number;
    function evenOdd(str){
    let length = str.length
    if(typeof str === "number"){
    return "Plese Give a valied input, numbers are not allowd here !!"
    }else if(length % 2 === 0){
    return "even"
    }else{ return "odd"}
    }
    // isLGSeven() function will take a number as peramiter and as per thhe instraction it will subtract the number first then it will check the result is less or equal to 7 if true it will return the result if false it will return the input multiplied by 2.
    function isLGSeven(number){
    let result = number - 7;
    if(typeof number !== "number"){
    return "Sorry! only number are allowd for this calculation"
    }else if( result <= 7){
    return result;
    }else if(result >= 7){
    return number * 2;
    }
    }
    // findingBadData() function is made for chacking that the given peramiter array have negetive number or not if true it will count 1 or if not it will sum 0 to the counter;
    function findingBadData(arr){
    let badDataCount = 0;
    for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr) === false){
    return "please enter a valid input"
    }else if(arr[i] < 0 ){
    badDataCount += 1;
    }else{ badDataCount += 0 }
    }return badDataCount;
    }
    // gemsToDiamond() function will take 3 number as peramiter and it's gonna calculate how many Diamond we will get from the gems we have, calculation is made as on the instraction says;
    function gemsToDiamond(gemsFrom1stFriend, gemsFrom2ndFriend, gemsFrom3rdFriend){
    const frien1 = gemsFrom1stFriend * 21;
    const frien2 = gemsFrom2ndFriend * 32;
    const frien3 = gemsFrom3rdFriend * 43;
    let totalDiamond = frien1 + frien2 + frien3;
    if(typeof gemsFrom1stFriend !== "number" || typeof gemsFrom2ndFriend !== "number" || typeof gemsFrom3rdFriend !== "number"){
    return "Plese give all 3 input as numbers, we can't run the calculation with one or two input"
    }else if(totalDiamond > 1000*2){
    return totalDiamond - 2000;
    }else{return totalDiamond}
    }