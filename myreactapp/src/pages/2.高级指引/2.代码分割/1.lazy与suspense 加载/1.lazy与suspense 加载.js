import React ,{Suspense,lazy} from "react";
const Children= lazy(()=>import('./children')) ;
let data = "";
let promise = "";
/* 请求之后显示 */
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
      /* fallback 加载出来之前显示的内容  */
      <Suspense fallback={<div>Loading...</div>}>
        <Children/>
        <LoadingCompontent/>
      </Suspense>
    )
  }
}