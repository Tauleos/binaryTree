'use strict'

class binaryTree{
  constructor(options){
    this.tree = options.tree
    this.results = []
  }
  bfs() {
    if(!this.tree) throw Error('no node')
    
    let queue = [this.tree];
    while(queue.length>0){
      let node = queue.shift()
      this.results.push(node.value)
      //console.log(node)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  
}

module.exports = binaryTree
