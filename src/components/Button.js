import React from 'react';
import PropTypes from 'prop-types';

/**
 * 버튼 스타일 테스트입니다
 * 
 * - `button`입니다
 */
const Button = ({name, style, big}) => {
    return (
        <button
            big={big}
            style={style}
        >{name}</button>
    )

}

Button.propTypes = {
    /** 보여주고 싶은 이름 */
    name: PropTypes.string.isRequired,
    /** 스타일 */
    style: PropTypes.object
}

Button.defaultProps = {
    name: 'Test Button test'
}

export default Button;