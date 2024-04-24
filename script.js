// function ReversString(str){
//   return str.split('').reverse().join('')
// }

function reversedString(str) {
  let revers = "";
  for(let i = str.length -1;i>=0 ; i--){
      revers += str[i]
}
return revers
}

console.log(reversedString("hello"));
