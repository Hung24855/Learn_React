import React from "react";
import { toast } from "react-toastify";

// Câu lệnh cài đặt toast thông báo  : npm install --save-exact react-toastify@8.0.2
class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnchange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  HandleClickAdd = (event) => {
    event.preventDefault();
    if (!this.state.title) {
      toast.warn("Vui lòng nhập dữ liệu !");
      return;
    }
    this.props.add({
      id: this.props.length + 1,
      title: this.state.title,
    });
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <div className="List-todo-container">
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleOnchange(event)}
        ></input>
        <button
          onClick={(event) => {
            this.HandleClickAdd(event);
          }}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default AddTodo;
