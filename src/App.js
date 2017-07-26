import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { data } = this.props;
    const namesList = data.map(name => {
      return (
        <li key={name.id} className={name.sex}>{name.name}</li>
      )
    })
    return (
      <div className="App">
        <ul>
          {namesList}
        </ul>
      </div>
    );
  }
}

export default App;
