import React from 'react';
import PropTypes from 'prop-types';

export default class Todo extends React.Component {

  render() {
    const {onClick, completed, text} = this.props;
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >{text}</li>
    )
  }
}

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};