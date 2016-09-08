import React, { Component, PropTypes } from 'react';
import {
  Button,
  Label
} from 'react-bootstrap';

const Task = (props) => {
  const { removeTask } = props
  const handleRemoveTask = (taskId, e) => {
    e.preventDefault();
    removeTask(taskId);
  }
  const {text, _id, level} = props.task;
  let sign = '';
  let label = '';
  switch (level) {
    case 0: {
      sign = 'success';
      label = 'Low';
      break;
    }
    case 1: {
      sign = 'warning';
      label = 'Medium';
      break;
    }
    case 2: {
      sign = 'danger';
      label = 'High';
      break;
    }
    default: {
      sign = 'default';
      label = 'Other';
    }
  }

  return (
    <li>{text}
      <Button bsStyle="danger" style={{float: "right"}}
              onClick={handleRemoveTask.bind(this, _id)}> Remove Task
      </Button>
      <Label bsStyle={sign} style={{float: "left", marginRight: "5px"}}>{label}</Label>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task
