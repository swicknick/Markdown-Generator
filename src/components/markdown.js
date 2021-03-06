import React, { Component } from 'react';
import { Remarkable } from 'remarkable';


var md = new Remarkable();

class MarkdownEditor extends Component {
    constructor(props) {
      super(props);
      this.md = new Remarkable();
      this.handleChange = this.handleChange.bind(this);
      this.state = { value: '' };
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    getRawMarkup() {
      return { __html: this.md.render(this.state.value) };
    }
  
    render() {
      return (
        <div className="MarkdownEditor">
          <h3>Input</h3>
          <label htmlFor="markdown-content">
            Enter some markdown
          </label>
          <textarea
            id="markdown-content"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
          <h3>Output</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />
        </div>
      );
    }
  } 

  export default MarkdownEditor;