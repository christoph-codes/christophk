import React from 'react';
import "./Hero.scss";

export default function Hero({ className, children, bgColor }) {
  return (
    <section style={{backgroundColor: bgColor}} className={`${className} Hero`}>
        <div className='content'>
          {children}
        </div>
    </section>
  );
}
