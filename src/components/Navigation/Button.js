import React from 'react';
import './Button.css';

const Styles = ['btn--primary', 'btn--outline'];

const Sizes = ['btn--medium', 'btn-large', 'btn--mobile', 'btn--wide'];

const Color = ['primary', 'blue', 'red', 'green'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    const checkButtonStyle = Styles.includes(buttonStyle) ?
    buttonStyle : Styles[0]

    const checkButtonSize = Sizes.includes(buttonSize) ?
    buttonSize : Sizes[0]

    const checkButtonColor = Color.includes(buttonColor) ?
    buttonColor : null

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} 
            ${checkButtonColor}`} onClick={onClick} type={type}>{children}
        </button>
    )
}