import React from "react";
/**
 *Class component
 */
// Cú pháp Destructuring : Lược bỏ bớt
// Đối với Object thì các biến Destructuring sẽ phải giống với các key trong Object
// Hàm map nhận đối số là một arow function
// Trong JSX dùng hàm map() thì JSX sẽ trả ra một Array mới

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };


  handleShowHide = () => {
    this.setState(
      {
        showJobs: !this.state.showJobs
      }
    )
  }
  render() {
    let { name, tuoi, arrJobs } = this.props;
    let { showJobs } = this.state;

    return (
      <>
        <div>Ten cua ban la : {name}</div>

        <div>Tuoi cua ban la : {tuoi}</div>

        {showJobs === false ? (
          <div>
            <button onClick={() => { this.handleShowHide() }}>Show</button>
          </div>
        ) : (
          <>
            {arrJobs.map((item, index) => {
              return (
                <div key={item.id}>
                  Công việc : {item.title} - Lương : {item.salary}{" "}
                </div>
              );
            })}
            <div>
              <button onClick={() => { this.handleShowHide() }}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

/*
 *
 *Function Component : Sử dụng khi tại component đó không sử dụng đến state ( Nhận data từ thằng cha truyền cho thằng con )
 *
 */
// const ChildComponent = (props) => {
//   let { name, tuoi, arrJobs } = props;

//   return (
//     <>
//       <div>Ten cua ban la : {name}</div>
//       <div>Tuoi cua ban la : {tuoi}</div>

//       {arrJobs.map((item, index) => {
//         return (
//           <div key={item.id}>
//             Công việc : {item.title} - Lương : {item.salary}{" "}
//           </div>
//         );
//       })}
//     </>
//   );
// };

export default ChildComponent;
