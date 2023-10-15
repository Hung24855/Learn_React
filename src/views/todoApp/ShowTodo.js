import React from "react";

class ShowTodo extends React.Component {
  listTodoCopy = [];
  handleEditTodo = (item) => {
    let editTodoNew = {};
    setTimeout(() => {
      editTodoNew = this.props.updateState();
    }, 100);
    setTimeout(() => {
      if (editTodoNew != null && editTodoNew.id === item.id) {
        this.props.upListTodo(this.listTodoCopy);
        return;
      } else {
        this.props.edit(item);
      }
    }, 200);
  };

  handleOnChangeListTodo = (event, handleEditTodo) => {
    this.listTodoCopy = this.props.returnListCurent();

    let editTodoCopy = { ...this.props.updateState() };
    editTodoCopy.title = event.target.value;
    this.listTodoCopy[editTodoCopy.id] = editTodoCopy;
  };

  render() {
    let ListTodos = this.props.list;
    let check = Object.keys(this.props.isEmptyListToto).length === 0;

    return (
      <>
        <div className="List-todo-content">
          <table>
            <thead>
              <tr>
                <th className="STT">STT</th>
                <th className="JOB">Công việc</th>
                <th className="Action">Thao tác</th>
              </tr>
            </thead>

            <tbody>
              {ListTodos.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {check === true ? (
                      <td>{item.title}</td>
                    ) : (
                      <>
                        {this.props.isEmptyListToto.id === item.id ? (
                          <td>
                            <input
                              defaultValue={item.title}
                              onChange={(event) =>
                                this.handleOnChangeListTodo(event)
                              }
                            ></input>
                          </td>
                        ) : (
                          <td>{item.title}</td>
                        )}
                      </>
                    )}

                    <td>
                      <button onClick={() => this.handleEditTodo(item)}>
                        {check === true ? (
                          "Edit"
                        ) : (
                          <>
                            {this.props.isEmptyListToto.id === item.id
                              ? "Save"
                              : "Edit"}
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => {
                          this.props.remove(item);
                        }}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ShowTodo;
