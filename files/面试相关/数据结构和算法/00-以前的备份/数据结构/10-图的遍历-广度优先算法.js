/*
  和树结构类似，我们可以访问图的所有节点。
  有两种算法可以对图进行遍历：
    广度优先搜索(BFS)：先广度后深度，用了队列
    深度优先搜索(DFS)：先深度后广度，用了栈

  图遍历可以用来寻找特定的顶点或寻找两个顶点之间的路径，检查图是否连通，检查图是否含有环等

  图遍历的思想方法：
    必须追踪每一个访问的节点，并且追踪有哪些节点还没有被完全探索。对于两种图遍历算法，都需要明确指出第一个被访问的顶点
    为了保证算法的效率，务必访问每个顶点至多两次。连通图中每条边和顶点都会被访问到

  *广度优先搜索的实际应用：找到最短路径
*/


//创建一个辅助函数initializeColor()，为这两个算法执行初始化操作
var initializeColor = function(){
  var color = [];
  for(var i=0; i<vertices.length; i++){
    color[vertices[i]] = 'white';   //1   为什么color要用数组，而不是对象？感觉对象更合理一些吧
  }
  return color;
};
//实现广度优先搜索算法
this.bfs = function(v, callback){
  var color = initializeColor(),    //2 用initializeColor函数来将color数组初始化为white
      queue = new Queue();    //3  我们还需要声明和创建一个Queue实例，它将会存储待访问和待探索的节点
  queue.enqueue(v);     //4   bfs方法接受一个顶点作为算法的起始点，起始顶点是有必要的，我们将此顶点入队列
  while(!queue.isEmpty()){    //5 如果队列非空
    var u = queue.dequeue(),    //6 我们将通过出队列操作凑够队列中移除一个顶点
        neighbors = adjList.get(u);   //7 并取得一个包含所有邻点的邻接表
    color[u] = 'grey';    //8 该顶点被标注为grey，表示我们发现了它（但还未完成对其的探索）
    for(var i=0; i<neighbors.length; i++){    //9   对于u的每个顶点
      var w = neighbors[i];   //10  我们取得其值（即该顶点的名字）
      if(color[w]==='white'){   //11  如果它还未被访问过
        color[w] = 'grey';    //12   则将其标注为我们已经发现了它
        queue.enqueue(w);     //13  并将这个顶点加入到队列中。这样当其从队列中出队的时候，我们可以完成对其的探索
      }
    }
    color[u] = 'black';   //14  当完成探索该顶点和其相邻顶点之后，我们将该顶点标注为已探索过的
    if(callback){     //15
      callback(u);
    }
  }
};

//callback回调函数--仅仅在浏览器控制台输出已经被完全探索过的顶点的名字
function printNode(value){11//16
  console.log('Visited vertex:' + value);   //17
}

//测试广度优先算法
graph.bfs(myVertices[0], printNode);    //18
/*
结果为：
Visited vertex:A
Visited vertex:B
Visited vertex:C
Visited vertex:D
Visited vertex:E
Visited vertex:F
Visited vertex:G
Visited vertex:H
Visited vertex:I
顶点被访问的顺序和图中表示的一致
*/


