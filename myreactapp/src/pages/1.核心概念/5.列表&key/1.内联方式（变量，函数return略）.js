import React from "react-dom";
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[1,2,3,4,5,6,7],
    }
  };
  handleClick = (e) => {
    e.preventDefault();//阻止默认跳转
  };
  render () {
    return (
      <div className="box">
       <ul>
       {/* 必须使用key属性，切不可重复 

        如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。
        如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值。

        数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值
       */}
         {this.state.list.map(item=><li key={item}>{item}</li>)}
       </ul>
      </div>
    )
  }
}