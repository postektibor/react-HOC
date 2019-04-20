import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent,) => {
  class ComposedComponent extends Component {

    shouldNavigateAgain() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    componentDidMount() {
      this.shouldNavigateAgain();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      this.shouldNavigateAgain();
    }


    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth }
  };

  return connect(mapStateToProps)(ComposedComponent);
}