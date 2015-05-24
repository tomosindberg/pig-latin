var vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true
};




function sweedishTrans( input ) {
  var word = '';
  for (i = 0; i < input.length; i++ ) {
    if (vowels[input.charAt(i).toLowerCase() ]) {
      word += input.charAt(i);
      console.log(word);
    }
    else {
      word +=(input.charAt(i) + 'o' + input.charAt(i));
    }
  } return word;
}


console.log(sweedishTrans('ogooglebar'));

//var words = input.split(' ');
//   words = words.map( function (word) {
//     var firstLetter = word[0];
//     console.log(firstLetter);
//     if ( !firstLetter ) { return '';}

//     if (vowels [firstLetter.toLowerCase() ] ) {
//       return word;
//     }

//     else {
//       return word + 'o' + word;
//     }

//   });

// }