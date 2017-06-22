function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var target = /\s+|\_+/g;
  var split = str.replace(/([a-z])([A-Z])/g, function(match,p1,p2){
    return [p1,p2].join(" ");
  });
  var newstr = split.replace(target,'-').toLowerCase();
  return newstr;
}

spinalCase('This Is Spinal Tap');