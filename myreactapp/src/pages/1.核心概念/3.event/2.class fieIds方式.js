import React from "react-dom";
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getDate(),
    }
  };
  /*  class fields 
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。  默认开启
  */
  handleClick = () => {
    this.setState({
      date: null,
    })
  };
  render () {
    return (
      <div className="box">
        {
          this.state.date ? <div>今天是{this.state.date}号</div> : <div>今天放假！</div>
        }
        {/* class fields方式 推荐 实验功能*/}
        <button onClick={this.handleClick}>change</button>
      </div>
    )
  }
}