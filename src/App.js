import React, { Component } from 'react';
import NamesList from './components/NamesList.js';
import Credit from './components/Credit.js';
import Search from './components/Search.js';
import Shortlist from './components/Shortlist.js';
import 'normalize-css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: 'hello'
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  render() {
    return(
      <div>
        <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <Shortlist/>
          <NamesList 
            data={this.props.data}
            filterText={this.state.filterText}
          />
          <Credit/>
        </main>
      </div>
    );
  }
}

export default App;
