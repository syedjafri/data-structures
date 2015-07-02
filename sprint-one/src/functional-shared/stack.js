var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    someInstance: {},
    storage: {},
    key: 0
  };
  extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  pop: function () {
    var result = this.storage[this.key];
    delete this.storage[this.key];
    this.key--;
    return result;
  },
  push: function(value) {
    this.key++;
    this.storage[this.key] = value;
  },
  size: function() {
    return Object.keys(this.storage).length;
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