import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import PropTypes from "prop-types";
const { Provider, Consumer } = React.createContext();
class Parent extends React.Component {
  state = {
    name: "sun",
    subName: "",
    content: "context传参"
  }
  getSubValue = (value) => {
    this.setState({
      subName: value,
    })
  }
  render() {
    return (
      <Provider value={this.state.content}>
        <div>
          <div>子级信息：{this.state.subName}</div>
          <SubDom subValue={this.state.name} getSubValue={this.getSubValue} bg={this.getSubValue}/>
        </div>
      </Provider>
    )
  }
}

class SubDom extends React.Component {
  constructor(props) {
    super(props);
    console.log("收到参数：", props.name)
  }
  state = {
    name: "sun",
  }
  handelClick = () => {
    this.props.getSubValue(this.state.name)
  }
  render() {
    return (
      <div>
        <div>我是父级参数：{this.props.subValue}</div>
        <button onClick={this.handelClick}>点我</button>
        <Consumer>
          {(data)=><div>{data}</div>}
        </Consumer>
      </div>

    )
  }
}
SubDom.propTypes={
  subValue:PropTypes.string,
  name:PropTypes.bool,
  bg:PropTypes.func.isRequired
}
reactDom.render(<Parent />, document.getElementById("root"))
reportWebVitals();
