var BinarySearchTree = function(value){
  //this = Object.create(bstPrototype);
  var tree = Object.create(bstPrototype);
  tree.value = value;
  //lower value
  tree.left = null;
  //higher value
  tree.right = null;
  return tree;

};

var bstPrototype = {};

/*
 * insert method -accepts value
 *  determine if value should be left or right.
 *  move current child if necessary i.e. from left to right
 * place value as BST in correct position
 */

bstPrototype.insert = function(value){
  if (value < this.value){
    //if left is not empty, insert on this.left
    this.left !== null 
      ? this.left.insert(value)
      : this.left = BinarySearchTree(value)
  } else {
    //if right is not empty, insert this.right
    this.right !== null
      ? this.right.insert(value)
      : this.right=BinarySearchTree(value)
  }
   
};

/*
 * contains method -accepts value
 * search tree for value
 * return bool
*/  
bstPrototype.contains = function(value){
  if (this.value === value){
    return true;
  } else if (value < this.value && this.left !== null){
    return this.left.contains(value);
  } else if (value > this.value && this.right !== null){
    return this.right.contains(value);
  } else {
    return false;
  }
};

/* 
 * depthFirstLog method -accepts func as callback
 * execute callback on every tree value
 */ 
bstPrototype.depthFirstLog = function(callback){
  callback(this.value);

  if (this.right !== null){
    this.right.depthFirstLog(callback);
  }
  if (this.left !== null){
    this.left.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 * Answer: All functions divide the tree in two halves to operate on
 * so their complexity is O(log N), except depthFirstLog which is O(N) 
 */
