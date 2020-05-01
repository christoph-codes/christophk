import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Christopher Kirk Jones - Design, Code, Create</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/css/uikit.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/js/uikit.min.js"></script>
      </Head>
      <Header/>
      <Link href="/home"><a>Home</a></Link>
      <Link href="/"><a>Index</a></Link>
      <h1>Index</h1>
      <Footer/>


    </div>
  );
<style jsx>{`
  
  `}</style>;

}
