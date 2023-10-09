import React from "react";

class MyForm extends React.Component {
  state = {
    title: "",
    Salary: ""
  };

  handleOnChangetitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleOnChangeSalary = (event) => {

    this.setState({
      Salary: event.target.value,
    });
  };

  handleClick = (event) => {
    //Ngặn chặn sự kiện mặc định của thẻ HTML
    event.preventDefault();
    // this.setState(
    //   {
    //     arrJobs: [...this.state.arrJobs,
    //     {
    //       id: Math.random() * 100, title: this.state.title, Salary: this.state.Salary
    //     }
    //     ]
    //   }
    // )
    this.props.AddJobs({
      id: Math.random(),
      title: this.state.title,
      salary: this.state.Salary
    });
    console.log("Data : ", this.state)
  };

  //Khi thêm thuộc tính value vào ô input thì sẽ không thể nào nhập được
  //Muốn nhập được thì phải dùng biến state
  render() {
    return (
      <>
        <h2>---- Add Job ----</h2>

        <form>
          <label htmlFor="title">title:</label>
          <br />
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnChangetitle(event)}
          />
          <br />
          <label htmlFor="Salary">Salary:</label>
          <br />
          <input
            id="Salary"
            type="text"
            value={this.state.Salary}
            onChange={(event) => this.handleOnChangeSalary(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Gui"
            onClick={(event) => this.handleClick(event)}
          />
        </form>


      </>
    );
  }
}

export default MyForm;
