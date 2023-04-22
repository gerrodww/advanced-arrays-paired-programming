// console.log(hasThreeVowels('delicious'));       //  true
// console.log(hasThreeVowels('bootcamp prep'));   //  true
// console.log(hasThreeVowels('bootcamp'));        //  false
// console.log(hasThreeVowels('dog'));             //  false
// console.log(hasThreeVowels('go home'));         //  false

let hasThreeVowels = function(string) {
    // Your code here
    let array = string.split('');
    const vowels = 'aeiou';
    array.filter((str) => {
let count = 0;
if (str.includes(vowels)) {count++;}
if (count >= 3) {return true;}
else {return false;}}
);
};

console.log(hasThreeVowels('delicious'));       //  true
