import React from "react";
/* 子组件 */
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { title, message, children } = this.props;
    return (
      <div className="form_item">
        <div>标题：{title}</div>
        <div>信息：{message}</div>
        {children}
      </div>
    )
  }
}
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
  };
  inputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  render () {
    const { value } = this.state;
    return (
      <div className="box">
        <div>我是弹窗！</div>
        <Dialog
          title="hello world"
          message="Welcome to chengdu"
        >
          <div>我是children 内容</div>
          <input type="text" value={value} onChange={this.inputChange} />
        </Dialog>
      </div>
    )
  }
}