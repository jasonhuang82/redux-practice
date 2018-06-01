import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { App } from '~/index.js';

// Redux 全域物件
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
// Logger with default options
// import logger from 'redux-logger';
import RootReducer from '~/reducers';

import '~/css.scss';
// 利用 Reducer 建立 store
/*
    @ redux 核心應用
    1.當 view 有動作就用dispatch發出行動物件
    2.由傳入 reducer 去對 action 做處理並回傳一包新的state去告訴store要更新
    3.由store更新完state後反應到view做更新畫面
*/
/*
    @ redux 原裡
    1.Reducer
        本質:將畫面需要的動作集中管理，做完處理後回傳新state去更新store更新畫面
        1-1.先建立好需要更新 store 的動作
        1-2.reducer 傳入第一參數是store內的值第二個是dispatch發送Actions物件所帶的值
        1-3.reducer 會依照actions.type去決定做甚麼，若都匹配不到則使用default
        1-4.由於store倚靠reducer建立store state，那一定會想知道預設 redux state怎麼來
        1-5.建立時會先跑到 switch defalut 並這時reducer第一state參數是undefined可透過
        function 預設值方式給預設值
        注意事項:
            #注意reducer swtich一定要return 一個新的State去更新store
            #最後使用combineReducers去把所有reducer組再一起變一包reducer，好去建立一整包store
            #一但用combineReducers會把dispatch做分流，也就是拆開的reducer state參數"只會拿到自已的state
            也只能更新自己的state"
    2.Actions
        本質:透過View 在某個時機，帶甚麼資料告訴reducer該做甚麼事去更新store
        2-1.最少要有type屬性去告訴 reducer
        2-2.建立定義好所需的動作與需要的資料
        2-3.可以建立actions資料夾透過function定義好要的資料只要傳所需資料就可以回傳
        行動物件
    3.Containers (關鍵)
        本質:將普通view組件與 store state && action 做connect，並把所需行為跟state當成props傳給
        view 組件
        3-1.可直接在這自訂組件 or import component fold 內的組件
        3-2.定義 mapStateToProps, mapDispatchToProps 去綁定 connect store && actions傳給view組件當props，預設不傳
        會只給actions中所有dispatch，不會給store
        注意事項:
            #若 store 中資料事需要計算或加工的可以在這一層處理並傳給 mapStateToProps 當props
    4.Store
        本質:集中管理所有組件狀態，只能透過dispatch執行reducer去更新他，並更新view
        4-1.先import combineReducers 完的Reducer，去建立一整包專案要的store
        4-2.傳給 <Provider store={store}>自訂組件</Provider>，傳給整個專案的組件 or container 做 mapStateToProps, mapDispatchToProps
        做connect綁定，讓所有組件資料來源都是由redux來

    @ redux 建立流程
    本質:redux 中所有組件皆沒有state
        1.所有state皆在redux，且由provider提供
        2.state由containers去connect view組件當成props傳下去給view組件用
        3.container 組件可以有生命週期(通常為拼裝組件的中組件) view 組件只負責畫面
        4.所以專案不會直接使用 component資料夾內組件而是使用 containers內已 connect過後的包裝組件
    1.可先撰寫 component (View)，
    2.在寫 container 層
    3.再想想需要甚麼state且要做些甚麼動作去建立 reducer && actions
    4.接著 回到container將 store && Actions 綁定到組件上形成connect組件，當成專案畫面組件使用
    5.在畫面直接使用connect 組件
*/

const initStoreState = {
    SwitchState: true
};

const store = createStore(
    RootReducer,
    initStoreState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
