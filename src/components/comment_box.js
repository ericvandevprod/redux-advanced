import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions';

class CommentBox extends Component {
  constructor() {
    super();

    this.state = {
      comment: ''
    }
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: ''});
  };

  render() {
    return (
        <form className="container" onSubmit={this.handleSubmit.bind(this)}>
          <textarea onChange={this.handleChange.bind(this)} value={this.state.comment} />
          <button>Click</button>
        </form>
    )
  }
}

export default connect(null, { saveComment })(CommentBox);