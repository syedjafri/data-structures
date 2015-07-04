var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage = this._storage || {};
  
  if (!this.contains(item)) { 
    this._storage[item] = "";
  }
  // push string item to set storage - if its not already present
};

setPrototype.contains = function(item){
  if (this._storage) {
    return this._storage.hasOwnProperty(item);
  }
  
  return false;
  // search storage item for string item
};

setPrototype.remove = function(item){
  if (this.contains(item)) {
    delete this._storage[item];
  }
  // remove string from the storage
};

/*
 * Complexity: What is the time complexity of the above functions?
 * All functions are O(1) due to direct access or utilizing O(1) functions.
 */
