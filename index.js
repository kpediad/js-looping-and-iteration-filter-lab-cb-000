// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (item) {return item.toLowerCase() === name.toLowerCase();});
}
function fuzzyMatch(array, letters) {
  return array.filter(function (item) {return item.slice(letters.length) === letters;});
}