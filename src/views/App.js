import logo from './logo.svg';
import './App.scss';
import MyComponent from './ExampleComponent/myComponent.js';

// Co 2 loai component : function component va class component
//JSX
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <MyComponent></MyComponent>
      </header>
      
    </div>
  );
}

export default App;
