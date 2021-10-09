import React from "react-dom";
class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      bg:false,
    }
  };
  render() {
    const Dom1=()=><div>true</div>
    const Dom2=()=><div>false</div>
    if(this.state.bg){
      return (<Dom1 />)
    }
    return  (<Dom2 />)
  }
}