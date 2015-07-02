var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create a Queue with Object.create to add queueMethods
  var queue = Object.create(queueMethods);
    // create a key variable to hold current key
  queue.storage = {};
  queue.key = 0;  
    // create a next variable to hold next in line position
  queue.nextAvail = 0;
  // return queue
  return queue;
};

var queueMethods = {
  // enqueue: takes an item and add to the queue
  enqueue: function(value) {
    this.key++;
    this.storage[this.key] = value;
  },
  // dequeue: returns the 'next' item from the queue
  dequeue: function() {  
  this.nextAvail++;
  var result = this.storage[this.nextAvail];
  delete this.storage[this.nextAvail];
  return result;
  },
  // size: returns the size of the queue
  size: function(){ return Object.keys(this.storage).length; }
};


