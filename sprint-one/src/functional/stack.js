var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  someInstance.push = function(value){
    key++;
    storage[key] = value;
  };

  someInstance.pop = function(){
    var result = storage[key];
    delete storage[key];
    key--;
    return result;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
 