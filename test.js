'use strict'

let binaryTree = require('./traverse')

let tree = {
  value: "-",
  left: {
    value: '+',
    left: {
      value: 'a',
    },
    right: {
      value: '*',
      left: {
        value: 'b',
      },
      right: {
        value: 'c',
      }
    }
  },
  right: {
    value: '/',
    left: {
      value: 'd',
    },
    right: {
      value: 'e',
    }
  }
}

let trees = new binaryTree({tree})
let a
//先序遍历
////递归
//a = trees.dfs_rec_DLR()
//
////非递归
//a = trees.dfs_rec_DLR()
////中序遍历
////递归
//a = trees.dfs_rec_LDR()
////非递归
//a = trees.dfs_LDR()
//
////后序遍历
////递归
//a = trees.dfs_rec_LRD()
////非递归
//a = trees.dfs_LRD_1()
a = trees.dfs_LRD_2()
console.log(a)

//广度优先
//trees.bfs()
//console.log(trees.results)


