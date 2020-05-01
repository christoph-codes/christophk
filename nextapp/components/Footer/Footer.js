import React from "react";
import { FaHeart as Heart } from "react-icons/fa";
import styles from './Footer.module.scss';

export default function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className="uk-container">
        <div className={styles.copyright}>
          <p className="uk-text-center">
            Copyright © 2020. All Rights Reserved. Made with <Heart /> by
            Christoph K.
          </p>
        </div>
      </div>
    </div>
  );
  }
