import React from 'react';
import './Section.css';

import Home from "../landingPage/Home.js";
import About from './about/About';
import Services from './services/Services';
import Contact from './contact/Contact';
import Skills from './skills/Skills';

function Section() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Skills />
      <Contact />
    </>
  );
}

export default Section;
