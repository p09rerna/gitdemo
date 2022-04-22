//Recursive
function preorder(node){
   if(node===null){
       return;
   }
   console.log(node.data);
   this.preorder(node.left);
   this.preorder(node.right);
}

//Iterative
function preorderIterative(node){
    if(node===null){
        return;
    }
const stack=[];
stack.push(node);
while (!stack.length)
    {
        const curr = stack.top();
        stack.pop();
 
       console.log(curr.data);
        if (curr.right) {
            stack.push(curr.right);
        }
        if (curr.left) {
            stack.push(curr.left);
        }
    }
}
