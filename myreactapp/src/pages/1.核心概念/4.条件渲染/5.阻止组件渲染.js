import React from "react-dom";
class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      warn:false,
    }
  };
  render() {
    /* 子组件 */
    class Children extends React.Component{
      constructor(props){
        super(props);
      };
      render(){
        if(this.props.warn)return null;//如果warn 为false 返回为null，就不会渲染组件
        return (
          <div>我不得错</div>
        )
      }
    }
    return  (
      <div className="box">
        <span>状态：{this.state.warn.toString()}</span>
        <Children warn={this.state.warn}/>
      </div>
    )
  }
}