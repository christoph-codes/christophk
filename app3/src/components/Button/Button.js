import React from 'react';
import './Button.scss';

export default function Button({ href, children, className, variant = 'primary', ...rest }) {
    return (
        <a href={href} className={`Button ${className} ${variant ? `Button__${variant}` : ''}`} {...rest}>
           {children}
        </a>
    );
}