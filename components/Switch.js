import React from 'react';
import PropTypes from 'prop-types';
const Switch = ({size = 100, SwitchState, switchStateHandle}) => {
    let classStr = (() => {
        let classStrArr = ['switch'];
        if (SwitchState) {
            classStrArr.push('active');
        }
        return classStrArr.join(' ');
    })();
    let styles = (() => {
        let styleObj = {};
        if (size && size > 0) {
            styleObj.width = `${size}px`;
            styleObj.height = `${size / 2}px`;
            styleObj.borderRadius = `${size / 3}px`;
        }
        return styleObj;
    })();
    return (
        <div 
            className={ classStr }
            onClick = { switchStateHandle }
            style = { styles }
        >
            <div className="swith-btn"></div>
        </div>   
    );
};

Switch.propTypes = {
    size: PropTypes.number.isRequired
};


export default Switch;