
function translatePigLatin(str) {
  var splited = str.split(''),
      vowel = ['a','e','i','o','u'],
      vowelLength = vowel.length,
      isVowel = false,
      isCombiTwo = false,
      isCombiThree = false,
      isConsonant = false,
      result = '',
      head = [],
      rest = [];
  for (var i=0; i<vowelLength; i++) {
    if (splited[0] === vowel[i]) {
      isVowel = true;
    } else {
      for(var j = 0; j<vowelLength; j++) {
        if (splited[1] === vowel[i]) {
          isConsonant = true;
        } else {
          for(var k=0; k<vowelLength; k++) {
            if (splited[2] === vowel[i]) {
              isCombiTwo = true;
            }else {
              isCombiThree = true;
            }//end combi else
          }//end third for
        }//end consonant else
      }//end second for
    }//end vowel else
   }//end first for
  if (isVowel){//first letter is vowel
    splited.push('way');
    result = splited.join('');
  } else {
    if (isConsonant) {//only first letter is consonat
      head = splited[0];
      rest = splited.slice(1);
    } else if (isCombiTwo) {
      head = [splited[0],splited[1]].join('');
      rest = splited.slice(2);
    } else if (isCombiThree) {
      head = [splited[0],splited[1],splited[2]].join('');
      rest = splited.slice(3);
    }
    rest.push(head);
    rest.push('ay');
    result = rest.join('');
  }


  return result;
}
translatePigLatin("glove");
