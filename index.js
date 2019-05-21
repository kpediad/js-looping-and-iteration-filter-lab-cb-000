// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (driver) {return driver.toLower​Case() === name.toLower​Case();});
}
