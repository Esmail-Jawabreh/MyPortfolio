import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from './components/Nav'
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>Ismail Aljawabrah Portfolio</title>
      </Head>

      <div>
        <Nav />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
