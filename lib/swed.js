var vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true
};

function swedishTrans( input ) {
  var word = '';
  for (i = 0; i < input.length; i++ ) {
    if (vowels[input.charAt(i).toLowerCase() ]) {
      word += input.charAt(i);
      //console.log(word);
    }
    else {
      word +=(input.charAt(i) + 'o' + input.charAt(i));
    }
  } return word;
}

module.exports = swedishTrans;

