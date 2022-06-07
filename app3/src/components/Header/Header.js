import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.scss";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import UIkit from 'uikit';
import logo from '../assets/memoji_blank.svg';

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
    <header className='Header'>
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
              {/* <img src='#' alt="hello" /> */}
                <button>
                  <GiHamburgerMenu color="var(--secon)" size="3rem" />
                </button>
              </a>
              <div id="navigation" uk-offcanvas="flip: true; overlay: true;">
                <div className="uk-offcanvas-bar">
                  <button className='uk-offcanvas-close' type="button" >
                    <FaTimes onClick={closeNav} size="1.5em" />
                  </button>
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
    </header>
  );
}
