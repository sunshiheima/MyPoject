import React from "react";
/* 子组件 */
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { header, body, footer } = this.props;
    return (
      <div className="form_item">
        {/* 头部 */}
        {header}
        {/* 弹窗主体 */}
        {body}
        {/* 脚部 */}
        {footer}
      </div>
    )
  }
}
function Header () {
  return (<div >我是头部</div>)
}
function Body () {
  return (<div >我是弹窗主体</div>)
}
function Footer () {
  return (<div >我是脚部</div>)
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
        <Dialog
          header={<Header />}
          body={<Body />}
          footer={<Footer />}
        >

        </Dialog>
      </div>
    )
  }
}