import React from 'react';
class RenderDomMethods extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
    function addDom(){
      /* 方式一 标签法   常用*/
      const dom1=<div className="box">hello world</div>

      /* 方式二  React.createElement 创建*/
      const dom2=React.createElement(
        "div",
        {className:"box"},
        "hello world"
      )
      
      /* 方法二简写 */
      const dom3={
        type:"div",
        props:{
          className:"box",
          children:"hello world"
        }
      }
    }
  }

}