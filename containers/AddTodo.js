import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '~/actions';

/*
    若沒傳入 mapStateToProps, mapDispatchToProps funciton作為參數
    告訴與 store connect 的組件，去告訴組件要從 store 或 action 中
    取甚麼state or dispatch 給組件當props，預設就只傳所有dispatch當參數給
    組件做 props
*/
const AddTodo = ({ dispatch }) => {
    let input;
    const addTextToList = () => {
        if (input.value.trim() !== '') {
            dispatch(addTodo(input.value));
            input.value = '';
        }
    }
    return (
        <div className="input-group my-3">
            <input
                ref={el => { input = el }}
                className="form-control"
                placeholder="please input text"
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        addTextToList();
                    }
                }}
            />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    onClick={addTextToList}
                >
                    Add Todo
                </button>
            </div>
        </div>
    );
};
export default connect()(AddTodo);