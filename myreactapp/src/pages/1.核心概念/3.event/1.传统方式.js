import React from "react-dom";
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getDate(),
    }
    // 为了在回调中使用 `this`，这个绑定是必不可少的
     this.handleClick = this.handleClick.bind(this);
  };
  handleClick(){
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
        {/* 如果你没有使用 class fields 语法，你可以在回调中使用箭头函数： */}
        <button onClick={()=>this.handleClick()}>change</button>
        {/* 传参方式 */}
        <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
      </div>
    )
  }
}