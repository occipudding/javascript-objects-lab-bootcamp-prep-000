var recipes = {};
var key;
var value;

function updateObjectWithKeyAndValue() {
  Object.assign({}, recipes, {[key]: value});
  
  return recipes;
}