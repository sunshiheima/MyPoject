import React from "react";
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "sun",
        passWord: "",
        remak: "",
        select: "",
      },
    }
  };
  inputChange = (e) => {
    /* 变成受控组件 */
    this.setState(oldState => ({
      formData: {
        ...oldState.formData,
        [e.target.name]: e.type && e.type ==="checkbox" ? e.target.checked : e.target.value,//多选处理
      },

    }))
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {name,passWord,select,remak}=this.state.formData;
    alert("昵称：" + name + "\n" +
      "密码：" + passWord + "\n" +
      "喜欢水果：" + select + "\n" +
      "备注：" + remak)
  };
  render () {
    const {name,passWord,select,remak}=this.state.formData;
    return (
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <div className="form-item">
            {/* input输入框 */}
            <label>昵称：<input type="text" value={name} disabled onChange={this.inputChange} placeholder="请输入昵称" name="name" /> </label>
          </div>
          <div className="form-item">
            {/* input输入框 */}
            <label>密码：<input type="password" value={passWord} onChange={this.inputChange} placeholder="请输入密码" name="passWord" /></label>
          </div>
          <div className="form-item">
             {/* textarea输入框 */}
            <label>备注：<textarea rows="3" value={remak} onChange={this.inputChange} placeholder="请输入备注" name="remak" /></label>
          </div>
          <div className="form-item">
             {/* select输入框 */}
            <label> 喜欢水果：<select value={select} onChange={this.inputChange} name="select">
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">酸橙</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select></label>
          </div>
          <div className="form-item">
            <label>文件：<input type="file" /></label>
          </div>
          <div className="form-item">
            <input type="submit" value="登录" />
          </div>
        </form>
      </div>
    )
  }
}