import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header(props) {
  return (
    <div className={styles.Header}>
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-2@s uk-width-1-4">
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
          <div className="uk-width-1-2@s uk-width-1-4">
            <div className={styles.nav}>
              <a href="#navigation"  uk-toggle="target: #navigation">
                <img
                  src="/hamburger.svg"
                  alt="Christopher Kirk Jones logo icon"
                />
              </a>
              <div id="navigation" uk-offcanvas="flip: true; overlay: true;">
                <div class="uk-offcanvas-bar">
                  <button
                    class="uk-offcanvas-close"
                    type="button"
                    uk-close
                  ></button>
                  <p>Mobile Nav</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
