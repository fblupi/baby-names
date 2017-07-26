import React, { Component } from 'react';
import NamesList from './components/namesList.js';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <NamesList data={this.props.data}/>
      </div>
    );
  }
}

export default App;
