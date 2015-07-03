var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null){
      list.tail = new Node(value);
      //insert node into list with value as key
      list[value] = list.tail; 
      list.head = list.tail;
    } else {
      if (list.head.next===null){
        list.head.next = value;
        list[value] = list.head;
      }

      list.tail = new Node(value);
      //insert node into list with node.value as key
      list[value] = list.tail; 

    }
    return true;
  };

  list.removeHead = function(){
    //remove the list object whose key is the head value
    //using the head next, assign that list value to head
    var result = list.head;
    delete list[list.head.value];
    list.head = list[list.head.next];
    return result.value;
  };

  list.contains = function(target){
    //check list object keys for value return true or false
    for (var key in list){
      if (key.toString()===target.toString()){
        return true;
      } 
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * For all function except contains, the time complexity id O(1).
 * - This is because we have a pointer to a key at all operations.
 * Contains is O(n) because it has to search through the keys in order to compare to target.
*/
