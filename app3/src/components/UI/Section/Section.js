import React from 'react';
import './Section.scss';

export default function Section({ id, className, bgColor, children}) {
    return (
        <section style={{backgroundColor: bgColor}} className={`Section ${className}`} id={id}>
            <div className='section_content'>
            {children}
            </div>
        </section>
    );
}