var recipes = {};

function updateObjectWithKeyAndValue() {
  Object.assign({}, recipes, {[key]: value});
  
  return recipes;
}