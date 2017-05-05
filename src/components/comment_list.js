import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  constructor() {
    super();

    this.state = {
      comments: ['one comment']
    };

    this.renderList = this.renderList.bind(this);
  }
  renderList = (comment) => {
    return (
        <li key={comment}>{comment}</li>
    )
  };

  render() {
    return (
        <ul>
          {this.props.comments.map((comment) => this.renderList(comment))}
        </ul>
    )
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps, null)(CommentList);