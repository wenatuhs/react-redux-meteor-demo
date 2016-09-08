import { modelReducer, formReducer } from 'react-redux-form';

const initState = {};
const initTodoState = {
  content: '',
  level: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case "INC_COUNT":
      return {
        ...state,
        count: (state.count || 0) + 1
      }
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: action.tasks
      }
  }
  return state
}

export const todo = modelReducer('todo', initTodoState);
export const todoForm = formReducer('todo', initTodoState);
