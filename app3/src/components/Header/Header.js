import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.scss";
import { FaTimes } from "react-icons/fa";
import UIkit from 'uikit';
import logo from '../assets/christophk_logo.svg';
import hamburger from '../assets/hamburger.svg';

export default function Header(props) {

  const closeNav = () => {
    UIkit.offcanvas("#navigation").hide();
  };

  const navItems = [
    {
      name: "My Story",
      link: "#my-story",
    },
    {
      name: "My Company",
      link: "#my-company",
    },
    {
      name: "Micro-Startups",
      link: "#micro-startups",
    },
    {
      name: "Milestones",
      link: "#milestones",
    },
    {
      name: "Let's Chat",
      link: "#lets-chat",
    },
  ];
  return (
    <div className='Header'>
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-2">
            <div className="logo">
              <Link uk-scroll="true" href="/">
                  <img
                    src={logo}
                    alt="Christopher Kirk Jones logo icon"
                  />
              </Link>
            </div>
          </div>
          <div className="uk-width-1-2">
            <div className='nav'>
              <a href="#navigation" uk-toggle="target: #navigation">
                <img
                  src={hamburger}
                  alt="Christopher Kirk Jones logo icon"
                />
              </a>
              <div id="navigation" uk-offcanvas="flip: true; overlay: true;">
                <div className="uk-offcanvas-bar">
                    <FaTimes onClick={closeNav} size="1.5em" />
                  <div className='mobile_nav_content'>
                    {navItems.map((item) => {
                      return (
                        <a key={item.name} href={item.link} uk-scroll="true">
                          <li onClick={closeNav}>
                            {item.name}
                          </li>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
