import React from "react-dom";
class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLogin:false,
    }
  };
  loginClick=(isLogin)=>{
    this.setState({
      isLogin:isLogin,
    })
  };
  render() {
    /* 登录 */
  function LoginButton(props){
    return (
      <button onClick={()=>props.onClick(true)}>login</button>
    )
  }
  /* 登出 */
  function LoginOutButton(props){
    return (
      <button onClick={()=>props.onClick(false)}>loginOut</button>
    )
  }
  let button;
    if(this.state.isLogin){
      button=<LoginOutButton onClick={this.loginClick}/>
    }else{
      button=<LoginButton onClick={this.loginClick}/>
    }
    return  (
      <div className="box">
        <div>是否登录：{this.state.isLogin?"是":"否"}</div>
        {button}
      </div>
    )
  }
}