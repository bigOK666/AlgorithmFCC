
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var temp = collection.filter(function(el) {
    for (var prop in source){
      if (!el.hasOwnProperty(prop) || (el[prop] !== source[prop]) ){
        return false;
      }
    }
    return true;
  });
  arr = temp;
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
