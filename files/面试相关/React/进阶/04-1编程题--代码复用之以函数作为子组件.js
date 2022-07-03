/*
如果你创建了类似于下面的Twitter元素，那么它相关的类定义是啥样子的？
<Twitter username='tylermcginnis33'>
  {(user) => user === null
    ? <Loading />
    : <Badge info={user} />}
</Twitter>

----------------------------------
import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'
// fetchUser take in a username returns a promise
// which will resolve with that username's data.
class Twitter extends Component {
  // finish this 在此处写代码！！！
}
*/

/*
分析：
  这种代码用的是回调渲染模式！
  这种模式中，组件会接受某个函数作为子组件，然后再渲染函数中以props.children进行调用。
*/
import React, {Component, PropTypes} from 'react';
import fetchUser from 'twitter';

class Twitter extends Component{
  state = {
    user: null
  }
  static propTypes = {
    username: PropTypes.string.isRequired
  }
  componentWillMount(){
    fetchUser(this.props.username)
      .then((user) => this.setState({user}))
  }
  render(){
    return this.props.children(this.state.user);
  }
}

/*
注意：
1.模式介绍：
  此模式又叫做“以函数为子组件”，目的是为了代码复用。

2.如何使用这种模式：
  Twitter组件是公用的，直接导出即可。
  然后在需要使用的地方用Twitter包裹代码，且要求Twitter的子组件必须是用一个函数包裹的！
  (页面最上部的那段代码就是具体的使用时的代码)

3.模式的优势:
  这种模式的优势在于将父组件与子组件解耦合，父组件可以直接访问子组件的内部状态而不需要再通过Props传递。这样父组件能够更方便的控制子组件展示的UI界面。
  譬如产品经理让我们将原本展示的Badge替换为Profile，我们可以轻易的修改下回调函数即可：
  <Twitter username='tylermcginnis33'>
    {(user) => user === null
      ? <Loading />
      : <Profile info={user} />}
  </Twitter>
*/
