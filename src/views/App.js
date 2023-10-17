import logo from "./logo.svg";
import "./App.scss";
import ListTodoApp from "./todoApp/ListTodo";
//import MyComponent from './ExampleComponent/myComponent.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import ParentComponent from "./MyForm/ParentComponent";
import ListUser from "./USER/ListUser";
import DetailUser from "./USER/DetailUser";
import avatar from "../assets/images/Avatar.jpg";

// Co 2 loai component : function component va class component
//JSX
// npm i react-toastify
// Muốn render ra 2 div trong 1 component thì ra thêm thẻ <React.Fragment></React.Fragment>
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <img
            src={avatar}
            className=""
            alt="logo"
            style={{ width: 100 + "px" }}
          />
          <br></br>
          <Switch>
            <Route path="/" exact>
              <ParentComponent />
            </Route>
            <Route path="/todo" exact>
              <ListTodoApp />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id" exact>
              <DetailUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
      </div>
    </BrowserRouter>
  );
}

export default App;
