import React, { Component } from 'react';
import MarkdownEditor from './components/markdown';


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <MarkdownEditor />
      </div>
    );
  }
}
 

export default App;
