import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

class Parent extends React.Component{
  state={
    name:"sun",
    subName:"",
  }
  getSubValue=(value)=>{
    this.setState({
      subName:value,
    })
  }
  render(){
    return(
      <div>
        <div>子级信息：{this.state.subName}</div>
        <SubDom subValue={this.state.name} getSubValue={this.getSubValue}/>
      </div>
    )
  }
}
class SubDom extends React.Component{
  constructor(props){
    super(props);
    console.log("收到参数：",props.name)
  }
  state={
    name:"sun",
  }
  handelClick=()=>{
    this.props.getSubValue(this.state.name)
  }
  render(){
    return(
      <div>
        <div>我是父级参数：{this.props.subValue}</div>
        <button onClick={this.handelClick}>点我</button>
      </div>
    )
  }
}
reactDom.render(<Parent/>, document.getElementById("root"))
reportWebVitals();
