export function TreeWalker(){
    const treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ELEMENT,
        {
          acceptNode(node) {
            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );
      
      const nodeList = [];
      let currentNode = treeWalker.currentNode;
      
      while (currentNode) {
        nodeList.push(currentNode);
        currentNode = treeWalker.nextNode();
      }
    //console.log({nodeList});
    return nodeList;
}
const newInstance = new TreeWalker();

class TreeWalker2{

}
const newInstance2 = new TreeWalker2();
//console.log({newInstance});