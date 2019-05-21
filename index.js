// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (item) {return item.toLower​Case() === name.toLower​Case();});
}
