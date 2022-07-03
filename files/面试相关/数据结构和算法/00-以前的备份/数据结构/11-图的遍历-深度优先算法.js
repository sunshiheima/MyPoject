/*
  深度优先搜素算法不需要一个顶点。在深度优先搜索算法中，若图中顶点v未访问，则访问该顶点v

  要访问顶点v，照如下步骤：
  1.标注v未被发现的（灰色）
  2.对于v的所有未访问的邻点w：
    访问顶点w
  3.标注v为已被探索的(黑色)

  深度优先搜索的步骤是递归的，这意味着深度优先搜索算法使用栈来存储函数调用（由递归调用所创建的栈）

  *使用深度优先搜索来实现拓扑排序
    当我们需要编排一些任务或步骤的执行顺序时，这称为拓扑排序
*/

//实现深度优先算法
this.dfs = function(callback){
  var color = initializeColor();    //1
  for(var i=0; i<vertices.length; i++){   //2
    if(color[vertices[i]]==='white'){   //3
      dfsVisit(vertices[i],color,callback);   //4
    }
  }
};
var dfsVisit = function(u,color,callback){
  color[u] = 'grey';    //5
  if(callback){   //6
    callback(u);
  }
  var neighbors = adjList.get(u);   //7
  for(var i=0; i<neighbors.length; i++){    //8
    var w = neighbors[i];   //9
    if(color[w]==='white'){   //10
      dfsVisit(w,color,callback);   //11
    }
  }
  color[u] = 'black';   //12
}

