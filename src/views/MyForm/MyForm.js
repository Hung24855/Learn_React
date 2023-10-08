import React from "react";
import ChildComponent from "./ChildComponent";
class MyForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "Job1", title: "Front-End", salary: "500$" },
      { id: "Job2", title: "Back-End", salary: "400$" },
      { id: "Job3", title: "Mobile", salary: "300$" },
    ],
  };

  handleOnChangeFirstname = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleClick = (event) => {
    //Ngặn chặn sự kiện mặc định của thẻ HTML
    event.preventDefault();
    console.log(this.state);
  };

  //Khi thêm thuộc tính value vào ô input thì sẽ không thể nào nhập được
  //Muốn nhập được thì phải dùng biến state
  render() {
    return (
      <>
        <h2>HTML Forms</h2>

        <form>
          <label htmlFor="firstName">First name:</label>
          <br />
          <input
            id="firstName"
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnChangeFirstname(event)}
          />
          <br />
          <label htmlFor="lastName">Last name:</label>
          <br />
          <input
            id="lastName"
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Gui"
            onClick={(event) => this.handleClick(event)}
          />
        </form>

        <ChildComponent
          name={this.state.firstName}
          tuoi={21}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyForm;
