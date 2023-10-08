import logo from './logo.svg';
import './App.scss';
//import MyComponent from './ExampleComponent/myComponent.js';\

import MyForm from './MyForm/MyForm';


// Co 2 loai component : function component va class component
//JSX

// Muốn render ra 2 div trong 1 component thì ra thêm thẻ <React.Fragment></React.Fragment>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <MyForm></MyForm>
      </header>
      
    </div>
  );
}

export default App;
