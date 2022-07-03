/*
  图：另一种非线性数据结构
  图是网络结构的抽象模型，图是一组由边连接的节点（或顶点）。

  图的相关术语：
    1.一个图G=(V,E)由以下元素组成
      V: 一组顶点
      E: 一组边，连接V中的顶点

    2.相邻顶点：由一条边连接在一起的顶点

    3.顶点的度：指的是这个顶点的相邻顶点的数量

    4.路径：是顶点v1,v2,v3...,vk的一个连续序列

    5.简单路径：要求步包含重复的顶点。环也是一个简单路径

    6.如果图中不存在环，则称该图是无环的。如果图中每两个顶点间都存在路径，则该图是连通的

    7.有向图和无向图：图可以是有向的或是无向的
      有向图的边有一个方向

    8.强连通：如果图中每两个顶点间再双向上都存在路径，则该图是强连通的

    9.加权：图还可以是加权的未加权的
      加权图的边被赋予了权值

    图的表示：
      从数据结构的角度来说，我们有多种方式来表示图。在所有的表示法中，不存在绝对正确的方式。
      图的正确表示法取决于待解决的问题和图的类型

    图的表示通常由三种方法：
      1.邻接矩阵（最常见）
        每个节点都和一个整数相关联，该整数将作为数组的索引
      2.邻接表（下面方法的实现基于这种方式）：
        由图中每个顶点的相邻节点所组成，存在很多方式来表示这种数据结构，例如：可以用列表（数组）、链表，甚至是散列表或是字典来表示相邻顶点列表
      3.关联矩阵：
        矩阵的行表示顶点，列表示边

  图的应用场景：
    任何二元关系都可以用图来表示，例如：任何社交网络如Facebook，还可以用图来表示道路、航班以及通信状态
    比如搜索图中的一个顶点或搜索一条边，寻找图中的一条路径（从一个顶点到另一个顶点），寻找两个顶点之间的最短路径，以及环检测。

*/

//声明类的骨架
function Graph(){
  var vertices = [];    //1 用一个数组来存储图中所有顶点的名字（为Graph类的私有属性）
  var adjList = new Dictionary();   //2 用一个字典来存储邻接表，字典会使用顶点的名字作为键，邻接顶点列表作为值（为Graph类的私有属性）

  //方法一：用来向图中添加一个新的顶点（因为图实例化后是空的）
  this.addVertex = function(v){   //此方法接受顶点v作为参数
    vertices.push(v);     //3 将顶点添加到顶点列表中
    adjList.set(v, []);   //4 并且在邻接表中，设置顶点v作为键对应的字典值为一个空数组
  }

  //方法二：用来添加顶点之间的边
  this.addEdge = function(v,w){   //此方法接收两个顶点作为参数
    addList.get(v).push(w);   //5 首先，通过将w加入到v的邻接表中。这样我们就添加了一条自顶点v到顶点w的边。(如果你想实现一个有向图，则此行就足够了)
    addList.get(w).push(v);   //6 由于本章中大多数例子都是基于无向图的，我们需要添加一条自w向v的边
  }

  this.toString = function(){
    var s="";
    for(var i=0; i<vertices.length; i++){   //10
      s += vertices[i] + '->';
      var neignbors = adjList.get(vertices[i]);     //11
      for(var j=0; j<neignbors.length; j++){    //12
        s += neignbors[j] + '';
      }
      s += '\n';    //13
    }
    return s;
  }


}

//测试addVertex()和addEdge()
var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];     //7
for(var i=0; i<myVertices.length; i++){   //8
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A','B');   //9
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');

//测试toString()
console.log(graph.toString());
//由于字典需要定义之后才能使用，所以控制台现在无法输出正确的结果，结果应该为：
/*
* A->B C D
* B->A E F
* C->A D G
* D->A C G H
* E->B I
* F->B
* G->C D
* H->D
* I->E
* */
//一个漂亮的邻接表，从上面的邻接表中可直接看出：顶点A的相邻顶点有：B、C、D