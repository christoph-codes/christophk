import styles from './Footer.module.scss';
import {FaHeart} from 'react-icons/fa';

export default function Footer(props) {
    return (
        <div className={styles.Footer}>
            <p>© 2020. All Rights Reserved. Site Designed with <FaHeart/> by a TKC Pro Company</p>
        </div>
    );
}