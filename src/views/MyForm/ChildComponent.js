import React from "react";

class ChildComponent extends React.Component {
  render() {
    // Cú pháp Destructuring : Lược bỏ bớt
    // Đối với Object thì các biến Destructuring sẽ phải giống với các key trong Object
    // Hàm map nhận đối số là một arow function
    // Trong JSX dùng hàm map() thì JSX sẽ trả ra một Array mới
    let { name, tuoi, arrJobs } = this.props;
    console.log(this.props, arrJobs);
    return (
      <>
        <div>Ten cua ban la : {name}</div>
        <div>Tuoi cua ban la : {tuoi}</div>

        {arrJobs.map((item, index) => {
          return (
            <div key={item.id}>
              Công việc : {item.title} - Lương : {item.salary}{" "}
            </div>
          );
        })}
      </>
    );
  }
}

export default ChildComponent;
