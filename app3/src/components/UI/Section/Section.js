import React from 'react';
import './Section.scss';

export default function Section({ className, children, variant, ...rest}) {
    return (
        <section className={`Section ${className} ${variant ? `Section__${variant}` : ''}`} {...rest}>
            <div className='section_content'>
            {children}
            </div>
        </section>
    );
}