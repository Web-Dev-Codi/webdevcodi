import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
