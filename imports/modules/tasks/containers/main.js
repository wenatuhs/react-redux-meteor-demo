import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../components/main';
import { subscribe, addTask, checkContent, resetContent, changeContent } from  '../actions';

// dummy
class container extends Component {
  componentDidMount() {
    this.computation = this.props.subscribe();
  }
  componentWillUnmount() {
    this.computation.stop()
  }
  render() {
    return <Main {...this.props} />
  }
}

// container
const mapState = ({Tasks, todo, todoForm}) => {
  const {tasks, count} = Tasks;
  return {
    tasks, count, todo, todoForm
  }
}
const mapDispatch = (dispatch, getState) => {
  return {
    subscribe: () => dispatch(subscribe()),
    addTask: (task) => dispatch(addTask(task)),
    changeContent: (value) => dispatch(changeContent(value)),
    checkContent: () => dispatch(checkContent()),
    resetContent: () => dispatch(resetContent()),
  }
}
export default connect(mapState, mapDispatch)(container)
