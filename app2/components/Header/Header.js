import Link from "next/link";
import {useState, useEffect} from 'react';
import styles from "./Header.module.scss";
import { FaTimes } from "react-icons/fa";

export default function Header(props) {
  // TODO: Install a package for onScroll
  const [scroll,setScroll] = useState({
    prevScrollPos: window.pageYOffset,
    visible: true
  });

  const handleScroll = () => {
    const prevScrollpos = prevScrollpos;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    setScroll({
      prevScrollPos: currentScrollPos,
      visible
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll])

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
      name: `Let's Chat`,
      link: "#lets-chat",
    },
  ];
  return (
    <div className={`${styles.Header} ${scroll ? 'scrolled' : null}`}>
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-2">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="/christophk_logo.svg"
                    alt="Christopher Kirk Jones logo icon"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="uk-width-1-2">
            <div className={styles.nav}>
              <a href="#navigation" uk-toggle="target: #navigation">
                <img
                  src="/hamburger.svg"
                  alt="Christopher Kirk Jones logo icon"
                />
              </a>
              <div id="navigation" uk-offcanvas="flip: true; overlay: true;">
                <div className="uk-offcanvas-bar">
                  <button
                    className="uk-offcanvas-close"
                    type="button"
                    uk-close="true"
                  >
                    <FaTimes size="1.5em" />
                  </button>
<<<<<<< HEAD
                  <div className={styles.mobile_nav_content}>
=======
                  <div className="mobile-nav-content" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
>>>>>>> 1a84082a5b63b5847f4913c1923c029c527ba2de
                    {navItems.map((item) => {
                      return (
                        <a key={item.name} href={item.link}uk-scroll="true">
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
