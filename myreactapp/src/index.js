import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
class Hello extends React.Component{
 state={
   list:[],
    formData:{
      name:"",
      content:"",
    }
 }
 onchange=(e)=>{
  this.setState({
    formData:{
      ...this.state.formData,[e.target.name]:e.target.value || e.target.checked,
    }
  }
 )
}
sunmit=()=>{
  this.setState({
    list:[this.state.formData,...this.state.list]
  })
}
  render(){
    return (
      <div>
        <label>姓名：<input type="text" placeholder="请输入" name="name" onChange={this.onchange}/></label>
        <label>内容：</label>
        <br/>
        <textarea rows="5" cols="100" placeholder="请输入" name="content" onChange={this.onchange}> </textarea>
        <label>{this.state.name}</label>
        <div>
          <button type="button" onClick={this.sunmit}>提交</button>
        </div>
        <div>
          {
            this.state.list.map(item=>{
              return (
                <div>
                  <div><div>姓名：</div>{item.name}</div>
                  <div><div>内容：</div>{item.content}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
// class SubDom extends React.Component{
//   constructor(props){

//   }
//   render(){
//     return(
//       <p></p>
//     )
//   }
// }
reactDom.render(<Hello/>, document.getElementById("root"))
reportWebVitals();
