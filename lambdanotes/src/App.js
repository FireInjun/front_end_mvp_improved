import React, { Component } from 'react';
import { MainContent, LeftNav } from './containers';

class App extends Component {
  render() {
    return (
      <div className='app_container'>
        <LeftNav />
        <MainContent />
      </div>
    );
  }
}

export default App;
