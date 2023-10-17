import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

class ListUser extends React.Component {
  state = {
    ListUser: [],
  };
  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      this.setState({
        ListUser: res && res.data && res.data.data ? res.data.data : [],
      });
    });
  }

  handleClick = (item) => {
    this.props.history.push(`/user/${item.id}`);
  };
  render() {
    let { ListUser } = this.state;
    return (
      <>
        <h1 className="Title">Danh sach user</h1>
        <div className="List-use-container">
          <div className="List-user-content">
            {ListUser &&
              ListUser.length > 0 &&
              ListUser.map((item, index) => {
                return (
                  <div
                    className="Child"
                    key={item.id}
                    onClick={() => this.handleClick(item)}
                  >
                    {index + 1} - {item.first_name} - {item.last_name}
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ListUser);
