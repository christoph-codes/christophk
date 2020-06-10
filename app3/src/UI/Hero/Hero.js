import React from 'react';
import './Hero.scss'

export default function Hero(props) {
    return (
        <div className='Hero'>
            {props.children}
            
        </div>
    );
}