import styles from "./Hero.module.scss";

export default function Hero(props) {
  return (
    <section className={styles.Hero}>
      {/* <div className="uk-container uk-container-small uk-text-center"> */}
        <div className={styles.content}>
          {props.children}
        </div>
      {/* </div> */}
    </section>
  );
}
