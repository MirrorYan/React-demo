import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
  <ul>{
    todos.map((todo, index) => {
      <Todo key={index}
        onClick={() => onTodoClick(index)}
        {...todo}
      />
    })
  }</ul>
);

export default TodoList;