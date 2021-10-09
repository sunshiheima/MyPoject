import React,{Fragment} from "react";
/* 子组件 */
class Children extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { list } = this.props;
    return (
      /* Fragment 可以使用 短语法 “<> </>”  表示 */
     <Fragment>
       {list.map((item,index)=>(
         <Fragment key={index}>
           <dt>{item.title}</dt>
           <dd>{item.content}</dd>
         </Fragment>
       ))}
     </Fragment>
    )
  }
}
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title:"1-1",
          content:"1-1 不存在",
        },
        {
          title:"2-1",
          content:"2-1 不存在",
        }
      ],
    }
  };
  render () {
    const { list } = this.state;
    return (
      <div className="box">
        <div>我是弹窗！</div>
        <Children
          list={list}
        />
      </div>
    )
  }
}