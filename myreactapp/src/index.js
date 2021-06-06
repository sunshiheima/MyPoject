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
   name:0,
 }
 onchange=(e)=>{
  this.setState({
    [e.target.name]:e.target.value || e.target.checked,
  }
 )
}
  render(){
    return (
      <div>
        <label><input type="text" name="name" onChange={this.onchange}/></label>
        <label>{this.state.name}</label>
      </div>
    )
  }
}
reactDom.render(<Hello/>, document.getElementById("root"))
reportWebVitals();
