# 1.装载阶段(/初始化，此阶段的结果是：用户在网页上可以看到组件的第一印象)

constructor 一个 React 组件需要构造函数，往往是处于以下目的： 1.初始化 state,因为有状态组件生命周期中任何函数都可能要访问 state

# 2.绑定成员函数的 this 环境(在构造函数中，this 指向 当前组件实例)

！无状态组件的 React 组件往往就不需要构造函数，

即 ES6 中每个类的构造函数，要创造一个组件类的实例，当然会调用对应的构造函数。

    getInitialState 这两个函数返回值都可以作为props的初始值，这个是只出现在装载过程中的，即组件的整个生命周期中该函数只会被调用一次，不要在里面放置预期会被多次执行的代码！
    getDefaultProps ！这两个函数只有在React.createClass方法创造的时候才会用到，在ES6的方法定义的React组件中根本不会用到！

# 3 componentWillMount ！此函数发生在“将要装载”的时候，这个时候没有任何渲染出来的结果，即使调用 this.setState 修改状态也不会引发重新绘制

                        ！注意：通常不用定义此函数，能在此函数中做的事情，都可以提前到constructor中

# 4 render ！render 函数并不做实际的渲染动作，它只是返回一个 JSX 描述的结构。最终由 React 来操作渲染过程。

                    1.如果render函数返回一个null或者false, 等于告诉React，这个组件不需要渲染任何DOM元素。
                    2.一个React组件可以忽略其他所有函数都不实现，但是一定要实现render函数，因为所有React组件的父类React.Component类对除render之外的生命周期函数都有默认实现
                    3.注意render函数应该是一个纯函数，完全根据this.state和this.props来决定返回的结果，而且不要产生任何副作用。因此不应该在render中调用this.setState

# 5 componentDidMount ！render 被调用完之后，componentDidMount 函数并不是被立即调用。而是等 render 函数返回的东西都已经引发了渲染，组件已经被装载到了 DOM 树上时，componentDidMount 才会被调用

                        ！在实际的应用当中，我们通常会在此函数当中：
                          1).通过AJAX获取数据来填充组件的内容。
                          2).进行DOM操作。因为在componentDidMount被调用的时候，组件已经被装载到DOM树上了！
                        ------
                        做一个实验，我们会发现，虽然componentWillMount都是紧贴着自己组件的render函数；但是当所有三个组件的render函数被调用之后，三个组件的componentDidMount才会连在一起被调用
                        原因：render函数本身并不往DOM树上渲染或者装载内容，它只是返回一个JSX表示的对象，然后由React库来根据返回对象如何渲染。
                             而React库肯定是要把所有组件返回的结果综合起来，才能知道该如何产生对应的DOM修改。
                             所以，只有React库调用三个Counter组件的render函数之后，才有可能完成装载，这时候才会依次调用各个组件的componentDidMount函数作为装载过程的收尾
                        ------
                        另：componentWillMount和componentDidMount还有一个区别：就是Will既会在浏览器端被调用又会在服务器端被调用；而Did只会在浏览器端被调用
                            原因是：既然“装载”是一个创建组件并放到DOM树上的过程，那么真正的“装载”是不可能在服务器端完成的，因为服务器端渲染并不会产生DOM树，通过React组件产生的只是一个存粹的字符串而已。

2.更新阶段(此阶段：让该组件可以随着用户操作改变展现的内容)

# 6 componentWillReceiveProps 只要父组件的 render 函数被调用，在 render 函数里面被渲染的子组件就会经历更新过程。关于这个函数我们还要注意： 1.不管父组件传给子组件的 props 有没有改变，都会触发子组件的 componentWillReceiveProps 函数 2.通过 this.setState 方法触发的更新过程不会调用这个函数 3.我们可以在此函数当中将 nextProps 和 this.prop 做对比，来决定是不是要更新组件的内部状态 state

---

此函数适合根据新的 props 值（即参数 nextProps）来计算出是不是要更新组件的内部状态 state，具体做法是：
在这个函数里面把传入参数 nextProps(代表这一次渲染传入的 props 值)和 this.props(上一次渲染时的 props 值)做必要对比，只有两者不相等的时候才有必要调用 this.setState 更新内部状态。

# 7 shouldComponentUpdate 说 render 函数很重要，是因为它决定了该渲染什么，其返回结果将用于构造 DOM 对象；

                                说shouldComponentUpdate很重要，是因为它决定了一个组件什么时候不需要渲染，其返回结果为一个布尔值，告诉React库这个组件在这次更新过程中是否要继续。
                                如果我们不自己写shouldComponentUpdate函数，那就沿用所有React组件的父类React.Component中的默认方式，默认实现方式就是返回true，即每次更新过程都要重新渲染。
                                为了更高的性能，我们需自己定制此函数：定义只有当props或者state改变的时候，才引发组件的重渲，否则就中断。
                                shouldComponentUpdate  (nextProps, nextState){
                                    return (nextProps.caption !== this.props.caption || nextState.count !== this.state.count)
                                }
                                当调用this.setState函数引发了更新过程时，并不是立刻更新组件的state值，而是先去执行shouldComponentUpdate函数

# 8 componentWillUpdate

# 9 render

# 10 componentDidUpdate 之前说到可以在 componentDidMount 函数中执行其他 UI 库的代码，比如 jQuery 代码。

                                当React组件被更新时，原有的内容被重新绘制，这时候就需要componentDidUpdate函数再次调用jQuery代码
                                ----
                                此函数既能在浏览器端执行，也能在服务器端执行（但是一般在服务器端，就算定义了也一般不会执行，如果执行了证明你的代码有点儿问题需要改进）

3.卸载过程

# 11 componentWillUnmount ！当组件要从 DOM 树上删除掉之前，对应的 componentWillUnmount 函数会被调用，所以这个函数适合做一些清理性的工作

！componentWillUnmount 中的工作往往和 componentDidMount 有关，比如：在 componentDidMount 中用非 React 得方法创造了一些 DOM 元素
如果撒手不管可能会造成内存泄露，那就需要在 componentWillUnmount 中把这些创造得 DOM 元素清理掉

其他： 1.每个 React 组件都可以通过 this.forceUpdate()函数强行引发一次重新绘制。 2.在 JSX 中写匿名函数赋值给 onClick 的方法--onClick={()=>{...}}。看起来非常简洁而且方便，其实并不是值得提倡的做法
因为每次渲染都会创造一个新的匿名方法对象，而且有可能引发子组件不必要的重新渲染。
3.render 函数和 shouldComponentUpdate 函数是所有生命周期中唯二要求有返回结果的函数！

---

衍生问题：【应该在 Ract 组件的何处发起 Ajax 请求？】

在 React 组件中，应该在 componentDidMount 中发起网络请求。
因为 componentDidMount 这个生命周期是在生成 DOM 树（挂载）完成之后才会调用的。
如果我们尝试在挂载之前例如 componentWillMount 来进行 AJAX 请求，然后把请求拿到的结果 setState。
这就意味着我们尝试在一个未挂载的组件上调用 setState，这将不起作用。

除了能在 componentDidMount 中发起 AJAX 请求，
如果我们需要在 React 当中使用其他 UI 库，例如 jQuery，例如绘制图标的 d3.js，也需要利用 componentDidMount
因为当 componentDidMount 执行时，React 组件对应的 DOM 已经存在，所有的事件处理函数也已经设置好。
这时候就可以调用 jQuery 的代码，让 jQuery 代码在已经绘制的 DOM 基础上增强新的功能。
