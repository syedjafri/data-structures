var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //should create an object with stackMethods to return
    //should containt storage object
    //should contain key tracker
    var stack = Object.create(stackMethods);
    stack.key=0;
    stack.storage = {};

    return stack;
};

var stackMethods = {

  //this should be a Stack prototype object
    //size function
    //pop function
    //push function
    size: function(){
      return Object.keys(this.storage).length;
    },
    pop: function(){
      var result = this.storage[this.key];
      delete this.storage[this.key];
      this.key--;
      return result;
    },
    push: function(value){
      this.key++;
      this.storage[this.key]=value;
    }
};

