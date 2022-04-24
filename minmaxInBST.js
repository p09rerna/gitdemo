class BSTNode{
    constructor(data){
    this.data=data;
    this.left=null;
    this.right=null;
    }
  findMIn(root){
    if (root === null) {
        return -1;
     }
     let currNode = root;
  
     while (currNode.left !== null) {
        currNode = currNode.left;
     }
     return currNode.data;
  }
  findMax(root){
    if (root === null) {
        return -1;
  }
  let currNode = root;
  
  while (currNode.right !== null) {
     currNode = currNode.right;
  }
     return currNode.data;
  }
}
