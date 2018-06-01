import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title = 'Button',customClass = [] , isDisabled, onClickHandle }) => {
    let styles = (() => {
        let styleObj = {};
        if (isDisabled) {
            styleObj.cursor = 'no-drop';
        }
        return styleObj;
    })();
    let classStr = (() => {
        let classStrArr = ['btn'];
        if (customClass.length !== -1) {
            classStrArr = [...classStrArr, ...customClass];
        }

        return classStrArr.join(' ');
    })();
    return (
        <button
            className={classStr}
            disabled={isDisabled}
            onClick={onClickHandle}
            style={styles}
        >
            {title}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Button;