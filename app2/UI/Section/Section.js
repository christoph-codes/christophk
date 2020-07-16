import styles from './Section.module.scss'

export default function Section(props) {
    return (
        <section style={{backgroundColor: props.bgColor}} className={`${styles.Section} ${props.className}`} id={props.id}>
            <div className={styles.section_content}>
            {props.children}
            </div>
        </section>
    );
}