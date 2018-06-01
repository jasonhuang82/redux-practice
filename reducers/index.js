import { combineReducers } from 'redux';
import todos from '~/reducers/todos';
import visibilityFilter from '~/reducers/visibilityFilter';
import SwitchState from '~/reducers/SwitchState';

export default combineReducers({
    todos,
    visibilityFilter,
    SwitchState
});