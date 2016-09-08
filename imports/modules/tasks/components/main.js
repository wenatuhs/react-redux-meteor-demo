import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {
  Button,
  ButtonToolbar,
  FormGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import Task from '../containers/task';

const App = class extends Component {
  render() {
    const { tasks, todo, todoForm,
      addTask, changeContent, checkContent, resetContent } = this.props;

    const handleChangeContent = (e) => {
      changeContent(e.target.value);
      checkContent();
    }

    const handleAddTask = () => {
      const task = {text: todo.content};
      addTask(task);

      resetContent();
      const node = $('#todoContent')[0];
      node.value = '';
      node.focus();
    }

    const renderTasks = () => {
      return (tasks||[]).map((task) => (
        <Task key={task._id} task={task} />
      ));
    }

    return (
      <div className="container">
        <header>
          <h1>Todo List ({(tasks ||[] ).length}) {todo.content}</h1>
        </header>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" id="todoContent" onChange={e => handleChangeContent(e)}/>
            <InputGroup.Button>
              <Button bsStyle="info" onClick={handleAddTask} disabled={!todo.content || !todoForm.fields.content.valid}> Add Task </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <ul>
          {renderTasks()}
        </ul>
      </div>
    );
  }
}

export default App
