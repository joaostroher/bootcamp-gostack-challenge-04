import React, { Component } from 'react';
import './style.css';

class Comment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment-container">
        <img src={comment.author.avatar} />
        <div>
          <strong>{comment.author.name}</strong> {comment.content}
        </div>
      </div>
    );
  }
}

export default Comment;