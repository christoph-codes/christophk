import React from 'react';
import {FaHeart} from 'react-icons/fa';
import './Footer.scss';

export default function Footer(props) {
    return (
        <div className='Footer'>
            <p>© 2020. All Rights Reserved. <br className="uk-hidden@s"/> Site Designed with <FaHeart/> by a TKC Pro Company</p>
        </div>
    );
}