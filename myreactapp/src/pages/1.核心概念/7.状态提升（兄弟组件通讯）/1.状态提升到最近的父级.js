import React from "react";
/* 子组件 */
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }
  inputChange=(e)=>{
    const {sclae}=this.props;
    this.props.temperatureInputChange(sclae,parseFloat(e.target.value.toString()))
  }
  render () {
    const bg = this.props.sclae === "c";
    const {value}=this.props;
    return (
      <div className="form_item">
        <label>{bg ? "摄氏" : "华氏"}度<input type="number" value={value} placeholder={`请输入${bg? "摄氏" : "华氏"}度`} onChange={this.inputChange}/></label>
      </div>
    )
  }
}
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cValue: 0,
      fValue: 0,
    }
  };
  temperatureInputChange = (sclae,value) => {
    const newValue=(!isNaN(value))?Math.round(value*1000)/1000:0.00;
    const bg=(sclae==="c");
      this.setState({
        fValue:bg?Math.round(((newValue * 9 / 5) + 32)*1000)/1000:newValue,
      })
      this.setState({
        cValue:bg?newValue:Math.round(((newValue - 32) * 5 / 9)*1000)/1000,
      })
  };
  render () {
    const { cValue,fValue } = this.state;
    return (
      <div className="box">
        <div>我的状态：{cValue>=100?"我已经沸腾":"我沸腾不了"}</div>
        <TemperatureInput sclae="c" temperatureInputChange={this.temperatureInputChange} value={cValue}/>
        <TemperatureInput sclae="f" temperatureInputChange={this.temperatureInputChange} value={fValue}/>
      </div>
    )
  }
}