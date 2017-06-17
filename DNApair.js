
function pairElement(str) {
  var dna = str.split(''),
      dnaLength = dna.length,
      pair = [['G','C'],['C','G'],['A','T'],['T','A']],
      pairLength = pair.length,
      result = [];
  for (var i=0; i<dnaLength;i++) {
    for (var j=0; j<pairLength; j++){
      if (dna[i] === pair[j][0]) {
        result.push(pair[j]);
      }
    }
  }
  
  return result;
}

pairElement("GCG");
