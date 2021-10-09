import React from "react-dom";
class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLogin:0,
    }
  };
  render() {
    return  (
      <div className="box">
        {/* 返回 false 的表达式会使 && 后面的元素被跳过，但会返回 false 表达式  这里的表达式为：0*/}
        <div>是否需要登录1：{this.state.isLogin&&"是"}</div>
        <div>是否需要登录2：{!this.state.isLogin&&<span>是</span>}</div>
      </div>
    )
  }
}