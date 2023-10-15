import React from "react";
import "./TodoApp.scss";
import AddTodo from "./AddTodo,";
import ShowTodo from "./ShowTodo";
import { toast } from "react-toastify";

class ListTodoApp extends React.Component {
  state = {
    ListTodos: [
      { id: "1", title: "Teacher" },
      { id: "2", title: "Designer" },
      { id: "3", title: "Programer" },
    ],
    editTodo: {},
  };

  Delete = (job) => {
    let jobs = this.state.ListTodos;

    this.setState({
      //arrJobs: jobs.splice(1, 1), sai vì : hàm splice trả về phần tử cần xóa
      ListTodos: jobs.filter((item) => item.id !== job.id),
    });
    toast.success("Xóa thành công !");
  };

  Add = (job) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, job],
    });

    toast.success("Thêm thành công !");
  };

  Edit = (obj) => {
    this.setState({
      editTodo: { ...obj },
    });
  };

  UpdateState = () => {
    return this.state.editTodo;
  };

  returnListTodoCurent = () => {
    return this.state.ListTodos;
  };

  UpdateListTodo = (list) => {
    this.setState({
      ListTodos: list,
    });
  };
  render() {
    let { ListTodos, editTodo } = this.state;
    return (
      <>
        <AddTodo add={this.Add} length={this.state.ListTodos.length} />
        <ShowTodo
          list={ListTodos}
          remove={this.Delete}
          edit={this.Edit}
          isEmptyListToto={editTodo}
          updateState={this.UpdateState}
          upListTodo={this.UpdateListTodo}
          returnListCurent={this.returnListTodoCurent}
        ></ShowTodo>
      </>
    );
  }
}

export default ListTodoApp;
