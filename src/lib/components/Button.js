import React from 'react';
import './button.css';


function Button({label, backgroundColor ='red'}) {
    return (
        <button className="button" style={{backgroundColor: backgroundColor}}>
            {label}
        </button>
    );
}

export default Button;