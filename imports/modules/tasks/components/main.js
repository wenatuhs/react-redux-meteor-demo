import React, { Component } from 'react';
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
      addTask, changeContent, changeLevel, checkContent, resetContent } = this.props;

    const handleChangeContent = (e) => {
      changeContent(e.target.value);
      checkContent();
    }

    const handleChangeLevel = (e) => {
      changeLevel(e.target.value);
    }

    const handleAddTask = () => {
      const task = {
        text: todo.content,
        level: parseInt(todo.level),
        createdAt: new Date()
      };
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
          <h1>Todo List ({(tasks ||[] ).length})</h1>
        </header>
        <FormGroup>
          <FormControl componentClass="select" placeholder="Low" onChange={e => handleChangeLevel(e)}
                       style={{float: "left", width: "90px", marginRight: "5px"}}>
            <option value={0}>Low</option>
            <option value={1}>Medium</option>
            <option value={2}>High</option>
          </FormControl>
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
