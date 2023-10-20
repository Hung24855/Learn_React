import React from "react";
import MyForm from "./MyForm";
import ShowJobsComponent from "./ShowJobsComponent";
import Color from "../HOC/Color";

import { connect } from "react-redux";

class ParentComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "Job1", title: "Front-End", salary: "500$" },
      { id: "Job2", title: "Back-End", salary: "400$" },
      { id: "Job3", title: "Mobile", salary: "300$" },
    ],
  };

  AddJobs = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  DeleteJob = (job, index) => {
    let jobs = this.state.arrJobs;

    this.setState({
      //arrJobs: jobs.splice(1, 1), sai vì : hàm splice trả về phần tử cần xóa
      arrJobs: jobs.filter((item) => item.id !== job.id),
    });
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handleDeleteUser(item) {
    console.log(item);
    this.props.deleteUser(item);
  }

  handleAddUser() {
    this.props.addNewUser();
  }

  render() {
    console.log("Check props redux : ", this.props);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <MyForm AddJobs={this.AddJobs} />
        <ShowJobsComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.DeleteJob}
        />

        <div className="listUsers">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <h3 key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => this.handleDeleteUser(item)}
                  >
                    X
                  </span>
                </h3>
              );
            })}

          <button onClick={() => this.handleAddUser()}>Add new</button>
        </div>
      </>
    );
  }
}
const MapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (user) => dispatch({ type: "Delete_User", payload: user }),
    //state: dispatch,
    addNewUser: () => dispatch({ type: "Add_New_User" }),
  };
};

// export default withRouter(ParentComponent);
// Thứ tự của 2 hàm MapStateToProps và mapDispatchToProps trong conncect này không thể đổi vị trí cho nhau vì state sẽ luôn được truyền cho hàm đầu tiền còn dispatch sẽ truyền cho hàm thứ 2
export default connect(
  MapStateToProps,
  mapDispatchToProps
)(Color(ParentComponent));

// export default connect(
//   mapDispatchToProps,
//   MapStateToProps
// )(Color(ParentComponent));
