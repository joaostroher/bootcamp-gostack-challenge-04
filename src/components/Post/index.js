import React, { Component } from 'react';
import './style.css';
import Comment from '../Comment'

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post-container">
        <div className="post-header">
          <img src={post.author.avatar}></img>
          <div className="user-info">
            {post.author.name}
            <span>{post.date}</span>
          </div>
        </div>
        <div className="post-message">{post.content}</div>
        { post.comments && <div className="divider"></div>}
        { post.comments.map((comment) => <Comment key={comment.id} comment={comment}></Comment>)}
      </div>
    );
  }
}

export default Post;