import React from 'react';
import './App.css';

import logo from './logo.svg';

interface IAppComponentProps {
  appName?: string;
}

class App extends React.Component<IAppComponentProps, {}> {
  protected static defaultProps: Partial<IAppComponentProps> = {
    appName: "REACT",
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.appName}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
