import React from 'react';
import CommentBox from './CommentBox';
import { Route, Link } from 'react-router-dom';
import CommentList from './CommentList';
import { connect } from 'react-redux';

class App extends React.Component {

  renderButton() {
    if (this.props.auth) {
      return <button>Sign Out</button>;
    }
    return <button>Sign In</button>;
  }

  renderHeader() {
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/post'>Post</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox}/>
        <Route path='/' component={CommentList}/>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect()(App);