import React from "react";
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="form_item">
        {/* 直接放children */}
        {this.props.children}
      </div>
    )
  }
}
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };
  render () {
    return (
      <div className="box">
        <div>我是弹窗！</div>
        <Dialog >
          <div>我是弹窗内容！</div>
        </Dialog>
      </div>
    )
  }
}