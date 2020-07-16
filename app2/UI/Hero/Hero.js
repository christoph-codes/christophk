import styles from "./Hero.module.scss";

export default function Hero(props) {
  return (
    <section className={`${props.className} ${styles.Hero}`}>
        <div className={styles.content}>
          {props.children}
        </div>
    </section>
  );
}
