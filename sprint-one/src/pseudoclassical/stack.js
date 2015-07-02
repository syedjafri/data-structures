var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //gratuitous use of this
  //key
  //storage

  this.key=0;
  this.storage={};
  

};


//create prototype object for Stack
//inside object, put size, push, pop methods
Stack.prototype = {
  constructor: Stack,  

  size: function(){
    return Object.keys(this.storage).length;
  },
  push: function(value){
    this.storage[++this.key]=value;
  },
  pop: function(){
    var result = this.storage[this.key];
    delete this.storage[this.key--];
    return result;
  }
}





