/* ====== CHECK IF A WORD IS PALINDROME ======*/

var word = "somos";
console.log(word);

for (i = 0; i < word.length; i++) {

  console.log("comparando " + word[i] + " con " + word[word.length -1 -i]);

  if (word[i] != word[word.length - 1 - i]) {
     console.log("La palabra " + word + " NO es un palíndromo");
     break
  }

}

if (word[i] == word[word.length - 1 -i]){
  console.log("La palabra " + word + " SI es un palíndromo");
}
