import React from 'react';
import PropTypes from 'prop-types';

const textDecorationStyles = (completed) => (
    {
        textDecoration: completed ? 'line-through' : 'none'
    }
);

const Todo = ({ onClick, completed, text }) => (
    <li
        className = "list-group-item"
        onClick={onClick}
        style={textDecorationStyles(completed)}
    >
        {text}
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;