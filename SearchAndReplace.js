
function myReplace(str, before, after) {
  var splits = str.split(' '),
      afterSplits = after.split(''),
      temp = [];
  for (var i=0; i<splits.length; i++) {
    if (splits[i] === before) {
      if (splits[i][0] === splits[i][0].toLowerCase()){
        temp = splits.splice(i,1,after);
      }else if (splits[i][0] === splits[i][0].toUpperCase()) {
        var afterUpper = after[0].toUpperCase();

        temp = afterSplits.splice(0,1,afterUpper);
        var afterJoin = afterSplits.join('');
        temp = splits.splice(i,1,afterJoin);
      }

    }
  }
  str = splits.join(' ');
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
