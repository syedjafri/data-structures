var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //should check that stored item in storage[i] location is a thing
    //if not a thing storage[i] = LinkedList()
  
  if (this._storage[i]===undefined){
    this._storage[i] = LinkedList();
   }

    this._storage[i].addToTail(v); //add k,v to enable search?
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //should return last value added to storage location collection
  if (!this._storage[i] || !this._storage[i].head) { return null; }

  var result = this._storage[i].head.value;
  if(this._storage[i].head !== this._storage[i].tail) {
    this._storage[i].addToTail(this._storage[i].removeHead());
  }
  return result;

};

HashTable.prototype.remove = function(k){
  //should get index for key
  //should remove from storage
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].removeHead();
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
