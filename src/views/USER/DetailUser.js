import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }

  handleBack = () => {
    this.props.history.push("/user");
  };
  render() {
    // console.log("Check props : ", this.props);
    let { user } = this.state;
    let check = Object.keys(user).length === 0;

    return (
      <>
        {check === false && (
          <>
            <div>ID : {user.id}</div>
            <div>
              Name : {user.first_name} {user.last_name}
            </div>
            <div>Email : {user.email}</div>
            <img src={user.avatar} alt="Avatar" />
            <br></br>
            <button onClick={() => this.handleBack()}>Back</button>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
