import React from "react";
import MyForm from "./MyForm";
import ShowJobsComponent from "./ShowJobsComponent";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

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
  render() {
    return (
      <>
        <MyForm AddJobs={this.AddJobs} />
        <ShowJobsComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.DeleteJob}
        />
      </>
    );
  }
}

// export default withRouter(ParentComponent);
export default Color(ParentComponent);
