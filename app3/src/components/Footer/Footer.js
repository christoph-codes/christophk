import React from 'react';
import {FaHeart} from 'react-icons/fa';
import './Footer.scss';

export default function Footer(props) {
    return (
        <div className='Footer'>
            <p>© {new Date().getFullYear()}. All Rights Reserved. <br className="uk-hidden@s"/> Site Designed with <FaHeart/> by a <a rel="noreferrer" target='_blank' alt="Custom Website Development by The Kirk Concept in Las Vegas, Nevada" href="https://thekirkconcept.com">The Kirk Concept</a></p>
        </div>
    );
}