// 在此可給建立store時預設state
const defaultState = false;
// reducer 必須為純粹function也就是所做的動作不能修改到原本物件
// 所以所做的操作可先copy一份出來再做事，確保reducer無副作用
const SwitchState = (state = defaultState, action) => {
    switch (action.type) {
        case 'SWITCH_STATE':
            // console.log('SWITCH_STATE state', state);
            return !state;
            /*
                return 你要更新view的 State
                且一定得return一包新的state  
            */
        default:
            // console.log('default state', state);
            // 一開始建立store會先default return然後建立預設state
            return state;
    }
};
export default SwitchState;