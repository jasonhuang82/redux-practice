import { connect } from 'react-redux';
import { toggleTodo } from '~/actions';
import TodoList from '~/components/TodoList';
import { VisibilityFilters } from '~/actions';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

/*
    mapStateToProps 會將 redux store中取出state放參數中，裡面 return 的物件
    是放傳甚麼props給下方 connect 綁定的組件第二個參數的組件當props
*/
/*
    1.mapDispatchToProps function dispatch 參數是 redux 所有 dispatch function
    2. 傳入mapDispatchToProps 物件參數是告訴被connect的組件要給他甚麼dispatch行為function
    (去更改store中state)，當props也可自訂

*/
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    alertText: 'This is first redux list'
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);