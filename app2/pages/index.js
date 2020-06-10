import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../UI/Hero/Hero";
import styles from "../pages/styles/home.module.scss";
import Section from "../UI/Section/Section";

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
      <div className={styles.home}>
        <Hero className={styles.home_hero}>
          <img src="/memoji.svg" alt="Christopher Jones Memoji Headshot" />
          <h1>Christopher Jones</h1>
          <h2>Full-time Designer. Passionate Programmer. Chronic Creator.</h2>
          <p>
            My goal is to work with great teams to work on awesome projects
            driven by passion, functionality and great design.
          </p>
          <p>Front-End Web Developer, UI/UX Designer</p>
        </Hero>
        <Section id="my-story" bgColor="white">
          <img
            src="/book.svg"
            alt="Christopher Jones Story about his design and development career"
          />
          <h1>My Story</h1>
          <p>
            My full name is Christopher Kirk Jones and I was born and raised in
            Las Vegas, Nevada. I just left my second decade and I am married to
            my beautiful wife of 8 years and we have two happy kids together! I
            received my bachelors degree in graphic design from the University
            of Nevada Las Vegas. I started a branding and logo design business
            called{" "}
            <a href="https://thekirkconcept.com" target="_blank">
              The Kirk Concept
            </a>{" "}
            that I will always continue to grow. In addition to designing, I am
            a self-taught web developer since 2010 and started programming in
            2015. I’m a huge believer in do it if you want to learn it and that
            is how I got here today with many skillsets!
          </p>
          <p>
            I spend a lot of time with my family, looking at model homes with my
            wife whether we’re buying or not…lol. My faith in Jesus Christ is at
            the center of everything I do, so always expect a smile unless the
            Vegas sun is beaming on my eyelids. I enjoy the sport of football
            since I played at the age of seven all the way through college at{" "}
            <a href="https://unlv.edu" target="_blank">
              UNLV.
            </a>{" "}
            I’m a Vegas-Everything fan. I’ve never truly left the country yet,
            outside of Ensenada, Mexico, which I don’t feel counts as leaving
            the country because it is still connected to the U.S.. I try to read
            as many self help books as I can and watch a long list of Netflix
            shows. The Cosby Show and Fresh Prince are hands down the best shows
            to binge-watch.{" "}
            <a href="https://www.hbo.com/silicon-valley" target="_blank">
              Silicon Valley
            </a>{" "}
            is probably the most hilarious and relatable show I’ve ever seen.
            I’m an Apple guy since 2009 and coffee is new for me but it is a
            must-have everyday!
          </p>
          <p>
            I have created/started many of amazing ideas from a personal
            training facility MySoloGym, to a Christian lifestyle brand{" "}
            <a href="https://www.equippdlife.com" target="_blank">
              Equippd
            </a>
            , all the way to a sunglasses e-commerce store, ShadeShip. I’m
            addicted to creating new ideas and don’t plan to stop anytime soon.
          </p>
          <p>
            I’m currently working on a Pokemon manager app with a good friend.
            I’m also building a bill management app called{" "}
            <a href="https://www.thenextbill.com" target="_blank">
              NextBill
            </a>{" "}
            written in
            <a href="https://vuejs.org/" target="_blank">
              Vue.JS
            </a>{" "}
            and a fun kids task management app called{" "}
            <a href="https://www.inthisorder.app" target="_blank">
              InThisOrder
            </a>{" "}
            written in{" "}
            <a href="https://reactjs.org/" target="_blank">
              React
            </a>{" "}
            and soon to be{" "}
            <a href="https://reactnative.dev/" target="_blank">
              React Native
            </a>
            . I have a long list of ideas I plan to either sell or execute but
            either way they HAVE to be created because the world needs them.
            More to come, so stay tuned!
          </p>
        </Section>
        <Section id="my-company" bgColor={`var(--ltgray)`}>
          <img
            src="/briefcase.svg"
            alt="Christopher Jones owns and operates The Kirk Concept a branding and web development company"
          />
          <h1>My Story</h1>
          <p>
            The Kirk Concept is all about getting companies excited about their
            brand. I provide custom logo/branding, graphic design, website
            development, and marketing services for all of my clients.
          </p>
          <p>
            I started this business right out of college in 2012 and it has been
            a part-time gig and worked full-time jobs as my primary source of
            income. Over the years I was most excited about creating brands that
            companies get excited about.
          </p>
          <p>
            My goal is to have every company in Las Vegas excited about their
            own brand to the point where it becomes a marketing competition and
            not a quality/brand competition.
          </p>
          <p>
            <a href="https://thekirkconcept.com" target="_blank">
              Visit The Kirk Concept
            </a>
          </p>
        </Section>
      </div>
      <Footer />
    </Fragment>
  );
}
