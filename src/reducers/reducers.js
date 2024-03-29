import {combineReducers} from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions';

const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state=SHOW_ALL, actions) {
  switch (actions.type) {
    case SET_VISIBILITY_FILTER:
      return actions.filter;
    default: return state;
  }
}
function todos(state=[], action) {
  switch (action.type) {
    case ADD_TODO: 
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default: return state;
  }
}

// Redux的combineReducers()作用是: 生成一个函数来调用reducer
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;