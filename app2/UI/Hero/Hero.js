import styles from "./Hero.module.scss";

export default function Hero(props) {
  return (
    <section className={styles.Hero}>
      <div className="uk-container uk-container-small uk-text-center">
        <img src="/mememoji.svg" alt="Christopherr Jones Memoji Headshot" />
        <h1>Christopher Jones</h1>
        <h2>Full-time Designer. Passionate Programmer. Chronic Creator.</h2>
        <p>
          My goal is to work with great teams to work on awesome projects driven
          by passion, functionality and great design. Front-End Web Developer,
          UI/UX Designer
        </p>
      </div>
    </section>
  );
}
