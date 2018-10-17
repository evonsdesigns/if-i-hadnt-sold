import React, {Component} from 'react';
import logo from '../logo.svg';
import '../sass/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Your present circumstances don't determine where you can go;
          </p>
          <p>
            they merely determine where you start.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Dont click here
          </a>
        </header>
      </div>
    );
  }
}

export default App;
