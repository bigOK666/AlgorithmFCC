function fearNotLetter(str) {
  var codeSet = [],
      codeTemp = 0,
      codeNext = 0,
      strLength = str.length,
      results = '';
  for (var i = 0; i < strLength; i++) {
      codeTemp = str.charCodeAt(i);
      codeNext = str.charCodeAt(i+1);
      if ((((codeNext-codeTemp) !== 1)) && (i+1<strLength)) {
        codeSet.push(codeTemp+1);
      }
  }
  if (codeSet.length === 0) {
    return undefined;
  } else {
    results = String.fromCharCode(codeSet[0]);
    return results;
  }
  
}

fearNotLetter("bcd");