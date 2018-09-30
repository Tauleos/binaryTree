var binaryTree = require('./binaryTree')

var tree = {
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
//先序遍历

//中序遍历
//后序遍历

//广度优先
trees.bfs()
console.log(trees.results)


