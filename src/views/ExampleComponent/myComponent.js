import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    name: "Hồng",
    ho: "Nghiêm Đình",
  };

  handleOnChangeName = (event) => {
    //console.log("Event: ",event)
    // Ham setState sẽ thay đổi giá trị của state và gọi lại hàm render() mà không cần load lại trang
    this.setState({
      name: event.target.value,
    });
  };
  handleOnClick = () => {
    //console.log("Hong")
    alert("Xin chao Nghiem :" + this.state.name);
  };

  render() {
    //console.log(this.state)

    return (
      <>
        <input
          value={this.state.name}
          type="text"
          onChange={(event) => this.handleOnChangeName(event)}
        />
        <br></br>
        <h1>My name is : {this.state.name}</h1>
        <button onClick={() => this.handleOnClick()}>Click me</button>
      </>
    );
  }
}

//NghiemDinhHong
export default MyComponent;
