var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //add a tracking key
  var key=0;
  // implement next in line variable
  var next=0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    //add items to end of storage object
    storage[key]=value;
    key++;
  };

  someInstance.dequeue = function(){
    //remove the first item from storage
    var result = storage[next];
    delete storage[next];
    next++;
    return result;
    //set next in line
  };

  someInstance.size = function(){
    //return the size of the storage object
    return Object.keys(storage).length;
  };

  return someInstance;
};
