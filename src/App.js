import React, { Component } from 'react';
import NamesList from './components/NamesList.js';
import Credit from './components/Credit.js';
import Search from './components/Search.js';
import Shortlist from './components/Shortlist.js';
import 'normalize-css';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Search/>
        <main>
          <Shortlist/>
          <NamesList data={this.props.data}/>
          <Credit/>
        </main>
      </div>
    );
  }
}

export default App;
