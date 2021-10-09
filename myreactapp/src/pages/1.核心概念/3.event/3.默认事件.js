import React from "react-dom";
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getDate(),
    }
  };
  handleClick = (e) => {
    e.preventDefault();
  };
  render () {
    return (
      <div className="box">
        <a href="https//www.baidu.com" onClick={this.handleClick}>点我去百度</a>
      </div>
    )
  }
}