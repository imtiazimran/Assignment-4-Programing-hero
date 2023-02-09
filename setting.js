// let obj = {
//     name: "Apple",
//     model: "Iphone 13",
//     varsion: "6/256 gb",
//     camera: "20 mp",
//     realise: "octobor 2021"

// }
// obj.model = "Iphoene 14"

// for(let propname in obj){
//     let propvalues = obj[propname] 
//     console.log(propname, propvalues);
// }
//  let arr = [10, 25, 12, 15, 32, 66, 43, 90]

// function adding(number){
//    let sum = 0;
//    for(let i = 0; i < oddNumbers.length; i++){
//       let element = number[i]
//       sum += element;
//    }
//    return sum;
// };


// function filterOddNumbers(number){
//    let oddNumbers = [];
//    for(let i = 0; i < arr.length; i++){
//       let element = number[i]
//       if(element % 2 !== 0){
//          oddNumbers.push(element)
//       }
      
//    }
//    return oddNumbers;
// }
//  let oddNumbers = filterOddNumbers(arr)
//  console.log(adding(oddNumbers))

// let sum = 1;
// for(let i = 8; i >=1 ; i--){
//    sum *=i
//    console.log(i, sum)
// }
// ---------------------------------------------------------------------
//  let marks = [75.25, 65, 80, 35.45, 99.50]
//  let avr = 0
// for(i = 0; i < marks.length; i++){
//     avr += marks[i]
  
// }
// console.log(avr)
// -------------------------------------------------------------------------

// if(poem.toLowerCase().includes("whre".toLowerCase())){
//    console.log("input is matched")
// }else{console.log("sorry we didn't find your input")}

// let f =  poem.toLowerCase().indexOf("where")
// if(f !== -1){
//    console.log("valide input")
// }else{console.log("invalide input")}
// console.log(f)
// --------------------------------------------------------------
// let poem = "Where the mind is without fear and the head is held high";

//  let arr = [
//    'Where',   'the',
//    'mind',    'is',
//    'without', 'fear',
//    'and',     'the',
//    'head',    'is',
//    'held',    'high'
//  ]
//  console.log(arr.join(" "))

// --------------------------------------------------------------------

// function maxNum(num1, num2, num3,){
//  if(num1 > num2 && num1 > num3){
//    return num1 + " is the Max number"
//  }
//  else if(num2 > num1 && num2 > num3){
//    return num2 + " is the Max number"
//  }else{
//    return num3 + " is the Max number"}
// }
// function maxNum(num1, num2, num3){
//  let highestNumber = Math.min(num1, num2, num3)
//    return highestNumber;
// }
// console.log(maxNum(20, 15, 22))

// -------------------------------------------------------------------

// let mySentense = "I am a good boy";

// function reverseWord(word){ 
//   let arrConvertion = word.split(" ")
//   let temp = [];
//   for(i = arrConvertion.length - 1; i >= 0; i--){
//     temp.push(arrConvertion[i]);
//   }
//   return temp.join(" ");;
// }
// let reverseSentence = reverseWord(mySentense);
// console.log(reverseSentence)

// -------------------------------------------------------------------
// let duplicateNumbers = [10, 11, 15, 10, 12, 58, 73, 15, 88, 12, 23, 32, 21]
//  function duplicateRemover(numbers){
//     let unique = [];
//     for(i = 0; i < numbers.length; i++){
//         let element = numbers[i]
//         if(unique.includes(element) === false){
//             unique.push(element)
//         }
//     }
//     return unique;
// }
// console.log(duplicateRemover(duplicateNumbers))
// ----------------------------------------------------------------------------------

// function fooBar(number){
//     for(i = 1; i <= number; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("fooBar")
//         }else if (i % 3 === 0){
//             console.log("foo")
//         }else if (i % 5 === 0){
//             console.log("bar")
//         }
//         else{console.log(i)}
//     }
// }
// fooBar(100)

// --------------------------------------------------------------------------

// function redianToDegree(red){
//     let PI = 3.141592653589793238462643383279502884197;

//     let result = red * 180 / PI;
//     return result.toFixed(2)
// }
// console.log(redianToDegree(4))
// --------------------------------------------------------------------
// let friends = ["Mamun", "Reaz", "SayedGazi", "jony"]

// function bestFriend(largeName){
//     let largeNameFriend = " "
//     for(let i = 0; i < largeName.length; i++){
//        let element = largeName[i]
//        if(largeNameFriend.length < element.length){
//         largeNameFriend = element
//        }
//     } return largeNameFriend
// }
// console.log(bestFriend(friends))
// --------------------------------------------------------------------------------------------------------

// let numbers = [10, 12, 2, 15, -85, -92, 64]

// function ispositiveNumber(number){
//     let positiveNumber = []
//     for(let i = 0; i < number.length; i++){
//         if(number[i] > 0 ){
//             positiveNumber.push(number[i])
//         }else{break;}
//     }
//     return positiveNumber;
// }
// console.log(ispositiveNumber(numbers))


console.log(20 + 110 + 35 + 15 + 30 + 60 + 126)