import {Fragment} from 'react';
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from '../UI/Hero/Hero';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Christopher Kirk Jones the designer and web developer</title>
        <link rel="icon" href="/favicon.ico" />
        {/* UIKit CSS imports */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/css/uikit.min.css"
        />
        {/* UIKit JS imports */}
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/js/uikit-icons.min.js"></script>
      </Head>

      <Header />
      <Hero>
      <img src="/mememoji.svg" alt="Christopherr Jones Memoji Headshot" />
        <h1>Christopher Jones</h1>
        <h2>Full-time Designer. Passionate Programmer. Chronic Creator.</h2>
        <p>
          My goal is to work with great teams to work on awesome projects driven
          by passion, functionality and great design. Front-End Web Developer,
          UI/UX Designer
        </p>
      </Hero>
      <main>
        <h1>My App</h1>
      </main>

      <Footer />
    </Fragment>
  );
}
