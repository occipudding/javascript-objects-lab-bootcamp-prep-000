var recipes = {};
var key;
var value;

function updateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign({}, recipes, {[key]: value});
  
  return recipes;
}