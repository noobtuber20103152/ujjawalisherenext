import Navbar from "./Navbar/Navbar"
import Front from "./Front Page/Front"
import About from "./About/About"
import Project from "./Projects/Project"
import Education from "./Education/Education"
import Competitive from "./Competitive/Competitive"
import Head from "next/head"
export default function Home() {
  return (
    <>
    <Head>
       <title>Portnal</title>
    </Head>
      <Navbar />
      <Front />
      <About />
      <Project />
      <Education />
      <Competitive />
    </>
  )
}
