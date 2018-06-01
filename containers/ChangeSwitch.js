import React from 'react';
import { connect } from 'react-redux';
import Switch from '~/components/Switch';
import { switchState } from '~/actions';

const mapStateToProps = (storeState, { size, customClass, title }: ownProps) => ({
    SwitchState: storeState.SwitchState,
    size,
    customClass,
    title
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    switchStateHandle: () => dispatch(switchState)
});

const LabelSwitch = (props) => {
    let classStr = (() => {
        let classStrArr = [];
        if (Array.isArray(props.customClass) && props.customClass.length !== -1) {
            classStrArr = [...classStrArr, ...props.customClass];
        }  
        return classStrArr.join(' ');
    })();
          
    return (
        <div className={classStr}>
            <label className="mb-0 mr-2">{props.title}</label>
            <Switch {...props} />
        </div>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LabelSwitch);