const sentence = "Hey fellow warriors"
const sentence2= "Just gniddik there is still one more"

// version reverse all words and letters
function reverseWords(sentence){
    return sentence.split(" ").map((x)=>reverse(x)).join(" ")
}

// version reverse only the letters within the words
function reverse (string){
    return [...string].reverse().join("");
}

// version reverse only the words with more than 5 letter
function reverseOverFiveLetterWords(sentence){
    return sentence.split(" ")
    .map((x)=>{
         return (x.length>=5
                ?reverse(x)
            :x)
    }).join(" ")
}


answer2= sentence2.split(" ").reverse()
answer3 = sentence2.length

console.log (answer3)

const split = [...sentence]
//console.log (split)

console.log (reverseOverFiveLetterWords(sentence2))