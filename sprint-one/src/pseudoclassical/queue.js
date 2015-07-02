var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // use keyword this, to store
  // storage, key, nextValue
  this.storage = {};
  this.key = 0;
  this.nextValue = 0;
};

Queue.prototype = {
  constructor: Queue, 
  enqueue: function(value) {
   this.storage[this.key++] = value;
  },
  dequeue: function(){
    var result = this.storage[this.nextValue];
    delete this.storage[this.nextValue++];
    return result;
  },
  size: function(){
    return Object.keys(this.storage).length;
  }  
}

// create prototype object for Queue
// add constructor Queue, size, push and pop methods



