import logo from './logo.svg';
import './App.css';

const element = "Hello, JSX"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className="App-logo" alt="logo"> Hello world </p>
        <p className="App-logo">
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p className="App-logo">
        Olha só que coisa mais top mano
        </p>

        <h1 className ="App-logo"> { element } </h1>

        <a
          className="App-link App-logo"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
