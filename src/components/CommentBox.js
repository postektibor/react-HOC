import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = (event) => {
    const { saveComment } = this.props;
    event.preventDefault();
    saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    const { comment } = this.state;
    const { fetchComments } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange} value={comment}/>
          <div>
            <button>Submit comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={fetchComments}>Fetch comments</button>
      </div>
    )
  }
}


export default connect(null, actions)(CommentBox);