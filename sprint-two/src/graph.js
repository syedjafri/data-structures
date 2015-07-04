

var Graph = function(){
  //collection of nodes
  
  this.graph = {};

};

Graph.prototype.addNode = function(node){
  //should add node object  {node:[edge]} to storage location
  //check if graph contains node
  if (!this.contains(node)){
      this.graph[node]=[]; 
  }
};

Graph.prototype.contains = function(node){
  //should check storage location for existence of node
  return this.graph.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  //if graph contains node. remove node from graph
  if (this.contains(node)){
    delete this.graph[node];
  }
  
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //should check edge array for fromNode object to see if toNode exists
  if (this.contains(fromNode)){

    var edges = this.graph[fromNode];
    for(var i=0; i<edges.length; i++){
      if (edges[i]===toNode){
        return true;
      }
    }      
  }
  return false; 
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //check that graph contains fromNode and graph contains toNode
  if (this.contains(fromNode) && this.contains(toNode)){
    //check if fromNode hasEdge toNode
      //if not, add edge to from 
      if (!this.hasEdge(fromNode, toNode)){
        this.graph[fromNode].push(toNode);
        this.graph[toNode].push(fromNode);
      }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //check if contains
  if (this.contains(fromNode) && this.contains(toNode)){
    //check if has edge
      //remove edge from both
    if (this.hasEdge(fromNode, toNode)){
      this.graph[fromNode] = _.without(this.graph[fromNode], toNode);
      this.graph[toNode] = _.without(this.graph[toNode], fromNode);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.graph){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Contains is O(1) because hasOwnProperty is a hash table function(we think).
 * AddNode and RemoveNode are O(1) since they use Contains and direct access.
 * HasEdge and forEachNode would be O(n) as it has to perform across the collection.
 * AddEdge and RemoveEdge are O(n) as it is multiple O(n) operations.
 */



