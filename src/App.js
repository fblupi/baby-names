import React, { Component } from 'react';
import NamesList from './components/NamesList.js';
import Credit from './components/Credit.js';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <NamesList data={this.props.data}/>
        <Credit/>
      </div>
    );
  }
}

export default App;
