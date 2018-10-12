'use strict'

class Traverse {
  constructor (options) {
    this.tree = options.tree
    if (!this.tree) throw Error('no node')
  }
  
  /**
   * 广度优先
   */
  bfs () {
    let results = []
    let queue = [this.tree]
    while (queue.length > 0) {
      let node = queue.shift()
      results.push(node.value)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    return results
  }
  
  /**
   * 深度优先 - 先序遍历 - 递归
   */
  dfs_rec_DLR () {
    let results = []
    let preOrder = (node) => {
      if (node) {
        results.push(node.value)
        preOrder(node.left)
        preOrder(node.right)
      }
    }
    preOrder(this.tree)
    return results
    
  }
  /**
   * 深度优先 - 先序遍历 - 非递归
   */
  dfs_DLR () {
    let results = []
    let stack = [this.tree]
    while (stack.length > 0) {
      let node = stack.pop()
      results.push(node.value)
      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
    }
    return results
  }
  
  /**
   * 深度优先-中序遍历 - 递归
   */
  dfs_rec_LDR (){
    let results = []
    let middleOrder = (node)=>{
      if(node){
        middleOrder(node.left)
        results.push(node.value)
        middleOrder(node.right)
      }
    }
    middleOrder(this.tree)
    return results
  }
  /**
   * 深度优先-中序遍历 - 非递归
   */
  dfs_LDR () {
    let results = []
    let stack = []
    let node = this.tree
    while (stack.length > 0 || node) {
      if(node){
        stack.push(node)
        node = node.left
      }else{
        node = stack.pop()
        results.push(node.value)
        node = node.right
      }
    }
    return results
  }
  
  /**
   * 深度优先-后序遍历 - 递归
   */
  dfs_rec_LRD () {
    let results = []
    let backOrder = (node) =>{
      if(node){
        backOrder(node.left)
        backOrder(node.right)
        results.push(node.value)
      }
    }
    backOrder(this.tree)
    return results
  }
  
  /**
   * 深度优先-后序遍历 - 非递归
   * 利用了栈的后入先出原理。
   * 使用两个栈
   * 先将根节点放入栈，依次放入左节点和右节点，
   * 这样出栈的顺序变成 D->R->L,顺序逆转之后变成L->R->D
   */
  dfs_LRD_1 () {
    let results = []
    let stack = []
    let tmp = [this.tree];
    while(tmp.length){
      let node = tmp.pop()
      stack.push(node)
      if(node.left){
        tmp.push(node.left)
      }
      if(node.right){
        tmp.push(node.right)
      }
    }
    while(stack.length){
      results.push(stack.pop().value)
    }
    return results
  }
  /**
   * 深度优先-后序遍历 - 非递归
   * 使用一个栈
   * 利用了栈的后入先出原理。
   * 先将根节点放入栈，依次放入左节点和右节点，
   * 这样出栈的顺序变成 D->R->L,顺序逆转之后变成L->R->D
   */
  dfs_LRD_2 () {
    let results = []
    let stack = [this.tree]
    let node;
    while(stack.length){
      node = stack.pop()
      results.push(node.value)
      if(node.left){
        stack.push(node.left)
      }
      if(node.right){
        stack.push(node.right)
      }
    }
    return results.reverse()
  }
  
}
module.exports = Traverse
