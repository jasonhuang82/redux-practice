
const defaultState = [{
    id: 1000000,
    text: 'testItem',
    completed: false
}];
// reducer 必須為純粹function也就是所做的動作不能修改到原本物件
// 所以所做的操作可先copy一份出來再做事，確保reducer無副作用
const todos = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('ADD_TODO state', state);
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            console.log('TOGGLE_TODO state', state);
            return state.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        default:
            // console.log('default state', state);
            return state;
    }
};
export default todos;