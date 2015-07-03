var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  // Extend with treeMethods
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target){
  // if tree value is equal to target, return true
  if (this.value === target) { return true; }

  //recursively call contains on tree children
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) { return true; } 
  }

  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: has a complexity of O(1) because it is simply adding to the end of an array.
 * contains: has a complexity of O(n^2) because it has to recurse down the tree to make sure it hits every value.
 */
