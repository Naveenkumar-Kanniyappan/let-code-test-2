// let input = [1, [2, 3], [4, 5]];
// let output = [];

// for (let i = 0; i < input.length; i++) {
//   if (Array.isArray(input[i])) {
//     for (let j = 0; j < input[i].length; j++) {
//         output[output.length] = input[i][j]
//     }
//   }
//   else{
//     output[output.length] = input[i];
//   }
// }

// console.log(output);
//=========================================================================================================================

// input = "hello world";
// output is ="Hello World";

// let str = "hello world";
// let arr ='';

// for(let i=0; i<str.length; i++){
//     if(i==0){
//         arr+=str[i].toUpperCase();
//         i++;
//     }
//     if(str[i] == ' '){
//         arr += " " + str[i+1].toUpperCase();
//         i++;
//     }
//     else{
//     arr+=str[i]
//     }
// }

// console.log(arr);

//======================================================================================================================================================

// let para = "hello this my world is White Devile";
// let strArr = [...para]; 
// let word = [];
// let words = [];

// for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] !== " ") {
//         word[word.length] = strArr[i]; 
//     }
//     else {
//         if (word.length > 0) {
//             words[words.length] = word; 
//             word = [];
//         }
//     }
// }
// if (word.length > 0) {
//     words[words.length] = word;
//     let wordCount = 0;

//     for (let i = 0; i < words.length; i++) {
//         wordCount++;
//     }
//     console.log("Total Words:", wordCount);
// }

//==============================================================================================================

// let str = "[{(}]";
// let arr = [];
// for (let i = 0; i < str.length; i++){
//      arr[i] = str[i];
//      for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === '(' && arr[j] === ')' || arr[i] === '[' && arr[j] === ']' || arr[i] === '{' && arr[j] === '}') { 
//                arr[i] = arr[j] = '0'; 
//              break;
//             }
//         }
//     }
// }
// let output = true;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== '0') {
//         output = false;
//         break;
//     }
// }
// console.log(output);

//=================================================================================================================

// let arr = ['tap', 'nan', 'nan', 'pat', 'hate', 'tahe'];
// let arr = ['tap', 'pat', 'tab', 'bat', 'cat', ' continue'];
// let grouped = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === null){
//          continue;
//     }
//     let temp = [arr[i]];
//     let sum1 = 0;
//     for (let ch of arr[i]) {
//         sum1 += ch.charCodeAt(0);
//     }
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] === null){
//             continue; 
//         } 
//         let sum2 = 0;
//         for (let ch of arr[j]) {
//             sum2 += ch.charCodeAt(0);
//         }
//         if (sum1 === sum2) {
//             temp.push(arr[j]);
//             arr[j] = null; 
//         }
//     }
//     grouped.push(temp);
// }

// console.log(grouped);

//===================================================================================================================

// function JunkArray(arr, num) {
//     let junk = [];
//     let element = [];
//     for (let i = 0; i < arr.length; i++) {
//         if ((i + 1) % num === 0 || i === arr.length - 1) {
//             junk[junk.length] = element.concat(arr[i]);
//             element = [];
//         } 
//         else {
//             element[element.length] = arr[i];
//         }
//     }
    
//     return junk;
// }

// console.log(JunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));

//==================================================================================================================

// let container = [true, '{}', null, undefined, '[]', false, 42, NaN, 0, "", "0", "false"];
// let truthy = [];
// let falsy = [];

// let truthIndex = 0;  
// let falsIndex = 0;  

// for (let i = 0; i < container.length; i++) {
//     if (container[i]) {
//         truthy[truthIndex] = container[i];
//         truthIndex++;
//     }
//      else {
//         falsy[falsIndex] = container[i];
//         falsIndex++;
//     }
// }

// console.log(truthy);
// console.log(falsy);

//=======================================================================================================================