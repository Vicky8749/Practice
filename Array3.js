let arr = ["node.js", "is", "a", "trademark", "of", "the", "openJS", "foundation"]
let otherWords = ["is", "a", "of", "the"]
let i;
let sentence = "";

for (i = 0; i < arr.length; i++) {

    sentence = sentence + " " + arr[i];

    // {console.log (otherWords.includes(arr[i]));
    //console.log (arr[i]+" "+ arr[i]+1);

}
function capitaliseFirstLetter(sentence){
return sentence.charAt(0).toUpperCase() + sentence.slice(1);}
console.log (capitaliseFirstLetter('foo')); //Foo
console.log(sentence);

