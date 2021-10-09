import React from "react-dom";
class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLogin:false,
    }
  };
  render() {
    return  (
      <div className="box">
        <div>是否需要登录：{!this.state.isLogin?"是":"否"}</div>
      </div>
    )
  }
}