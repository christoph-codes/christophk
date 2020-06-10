import React from 'react';
import './Header.scss'

export default function Header(props) {
    return (
        <div className='Header'>
            <div className="uk-grid">
                <div className="uk-width-1-2@s uk-width-1-4">
                    <h1>Logo</h1>
                </div>
                <div className="uk-width-1-2@s uk-width-1-4">
                    <h1>Navigation</h1>
                </div>
            </div>
            
        </div>
    );
}