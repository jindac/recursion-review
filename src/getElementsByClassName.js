// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var found = [];
  var findNodes = function (value) {
    var currentNode = value.childNodes;
    var splitClass;
    for (var i = 0; i < currentNode.length; i++) {
      if (currentNode[i].className !== undefined) {
        splitClass = currentNode[i].className.split(' ');
        //console.log("splitClass = ",splitClass);
        for (var j = 0; j < splitClass.length; j++) {
          if (splitClass[j] === className) {
            found.push(currentNode[i]); 
            //console.log("found = ", found);
          }
        }
      }
      if (currentNode[i].childNodes.length !== 0) {
        findNodes(currentNode[i]);
      }
    }    
  };
  if (document.body.className === className) {
    found.push(document.body);
  }
  findNodes(document.body);
  return found;
};