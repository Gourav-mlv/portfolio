import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))

const Feedback = dynamic(() => import("@/utils/Feedback"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Gourav Malviya's Portfolio</title>
        <meta name="title" content="Gourav Malviya's Portfolio" />
        <meta name="description" content="Discover the impressive portfolio of Gourav Malviya, showcasing expertise in backend development with Node.js, Express, MongoDB, and more. Explore simple, dark and light theme designs, and mobile responsiveness." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gourav Malviya's Portfolio" />
        <meta property="og:description" content="Discover the impressive portfolio of Gourav Malviya, showcasing expertise in backend development with Node.js, Express, MongoDB, and more. Explore simple, dark and light theme designs, and mobile responsiveness." />
        <meta property="og:image" content="link_to_your_image" />
        <meta property="og:url" content="link_to_your_portfolio" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Gourav Malviya's Portfolio" />
        <meta property="twitter:description" content="Discover the impressive portfolio of Gourav Malviya, showcasing expertise in backend development with Node.js, Express, MongoDB, and more. Explore simple, dark and light theme designs, and mobile responsiveness." />
        <meta property="twitter:image" content="link_to_your_image" />
        <meta property="twitter:url" content="link_to_your_portfolio" />

        <meta name="keywords" content="portfolio, backend developer, Node.js, Express, MongoDB, web development, dark theme, light theme, best portfolio github, best Node.js portfolio, how to make a portfolio, best backend developer portfolio github, backend developer in Pune, backend developer in Bengaluru, backend developer in India, developer in Indore, API development, RESTful APIs, microservices, Redis, SQL, JavaScript developer, backend engineer, server-side development, cloud integration, full stack developer, software engineer, scalable architecture, real-time applications, tech stack, backend frameworks, software development, web applications, Vymo Technologies, automated testing, DevOps, Redis caching, OpenAI APIs, lead sentiment analysis, third-party API integrations" />
        <meta name="author" content="Gourav Malviya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Experience */}
          <Experience />
          {/* Education */}
          <Education />
          {/* SocialMedia */}
          <SocialMedia />
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />

          {/* Feedback Modal */}
          <Feedback />
        </div>
      </div>
    </Fragment>
  );
}

export default Home
