import React from 'react';
import AddTodo from '~/containers/AddTodo';
import VisibleTodoList from '~/containers/VisibleTodoList';
import ChangeSwitch from '~/containers/ChangeSwitch';
import SubmitButton from '~/containers/SubmitButton';
import Footer from '~/components/Footer';

export const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <div className="d-flex justify-content-between align-items-center">
            <Footer />
            <ChangeSwitch
                size={60}
                customClass={['d-inline-flex', 'align-items-center']}
                title="確認新增"
            />
        </div>
        <div className="confirmBtn d-flex justify-content-center mt-3">
            <SubmitButton
                title="送出"
                customClass={['btn-lg', 'btn-outline-info']}
            />
        </div>
        
    </div>
);