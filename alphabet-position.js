

function alphabetPosition(text) {
    
   return text.split("").filter((x)=>getIndex(x))
    
  }

function getIndex(letter){
    const abcs= "abcdefghijklmnopqrstuvwxyz"
    if (abcs.includes(letter)) {
        return abcs.indexOf(letter)
    }
}

const test =  "The sunset sets at twelve o' clock."
//console.log(test.split(""))
const answ = test.split("").map(getIndex)

//console.log(answ)
console.log (alphabetPosition(test))