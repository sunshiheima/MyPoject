import React from "react-dom";
class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:"sun",
    }
  }
  render() {
    return (
      <Children name={this.state.name}/>
    )
  }
}
class Children extends React.Component{
  constructor(props){
    super(props);
    this.state={
      time:new Date(),
      timeBg:null,
    }
  }
  timeRun(){
    this.timeBg=setInterval(()=>{
      this.setState({
        time:new Date(),
      })
    },1000)
  }
  /* 挂载 钩子函数 */
  componentDidMount(){
    this.timeRun();
  };
  /* 将要卸载钩子函数 */
  componentWillUnmount(){
    this.timeBg=null;
  }
  render() {
    return (
      <div className="box">
        <div>我叫：{this.props.name}</div>
        <div>hello world{this.state.time.toLocaleString()}</div>
      </div>
    )
  }
}