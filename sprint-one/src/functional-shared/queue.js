var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //should return a Queue object
  var queue = {     
    storage: {}, //should store queue
    key: 0, //should track counter
    nextVal: 0 //should track position    
  };
  extend(queue, queueMethods); //should have methods defined in queueMethods
  return queue;
};


var queueMethods = {
  //size method
    //should return size of object where queue is stored
    size: function (){
      return Object.keys(this.storage).length;
    },

  //enqueue method
    //should add to queue storage
    //should increment counter
    enqueue: function(value){   
      this.storage[this.key]=value;
      this.key++; 
    },

  //dequeue method
    //should remove first item from storage
    //should increment position tracker
    //should return removed item
    dequeue: function(){
      var result = this.storage[this.nextVal];
      delete this.storage[this.nextVal];
      this.nextVal++;
      return result;
    }
};

function extend(obj) {

  var objects = Array.prototype.slice.call(arguments);
  obj = objects.shift();

  for (var i=0; i<objects.length; i++){
    for (var key in objects[i]){
      obj[key]=objects[i][key];
    }
  }
  return obj;
}

