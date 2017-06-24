function uniteUnique(arr) {
  var args = Array.from(arguments),
      results = [],
      temp = [];
  var collection = args.reduce(function(sum,el) {
    return sum.concat(el);
  },[]);
  results = collection.filter(function(item,index,array){
    return array.indexOf(item) === index;
  });
  return results;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);