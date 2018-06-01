import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';



const TodoList = ({ todos, toggleTodo, alertText }) => (
    <React.Fragment>
        {/*<div className="alert alert-success" role="alert">{alertText}</div>*/}
        <ul className="my-list list-group mb-3">
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => toggleTodo(todo.id)}
                />
            )}
        </ul>
    </React.Fragment>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList;