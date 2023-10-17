import React from "react";
import ReactDOM from "react-dom";
import "./style/global.scss";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux"; // Ép cho redux chạy song song với react khi khởi chạy ứng dụng , redux không phải con của React mà nó hoạt động độc lập

import { createStore } from "redux"; // Tạo nơi lưu trữ dữ liệu cho redux (store)
import RootReducer from "./store/reducers/rootReducer"; // Trả ra dữ liệu cho redux để lưu vào trong store
// React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const reduxStore = createStore(RootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
