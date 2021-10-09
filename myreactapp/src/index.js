import React ,{Suspense,lazy} from "react";
import reactDom from 'react-dom';
import reportWebVitals from "./reportWebVitals"
const Children= lazy(()=>import('./pages/2.高级指引/2.代码分割/1.lazy与suspense 加载/children')) ;
let data = "";
let promise = "";
function requestData() {
  if(data){
      return data;
  }
  if(promise){ throw  promise}
  promise = new Promise((resolve)=>{
      setTimeout(()=>{
          data = "数据出来了";
          resolve();
      },2000)
  })
  throw promise
}

function LoadingCompontent(){
  const message= requestData()
  return <div>{message}</div>
}
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };
  render () {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Children/>
        <LoadingCompontent/>
      </Suspense>
    )
  }
}

reactDom.render(<Parent />, document.getElementById("root"))
reportWebVitals();
