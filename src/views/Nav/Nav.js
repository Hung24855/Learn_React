import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          {/* <NavLink to="/" activeClassName="active" exact={true}>
            Home
          </NavLink>
          <NavLink to="/todo" activeClassName="active">
            Todo
          </NavLink> */}
          <a href="/" className="">
            Home
          </a>
          <a href="/todo">Todo</a>
          <a href="/user">User</a>
        </div>
      </>
    );
  }
}

export default Nav;
