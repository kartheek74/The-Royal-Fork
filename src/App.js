import { useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import ChefSpecial from "./components/ChefSpecial";
import About from "./components/About";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {

    const handleScroll = () => {

      const navbar = document.querySelector(".navbar");

      if (!navbar) return;

      if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <Menu />

      <ChefSpecial />

      <About />

     

      <Contact />

      <Footer />
    </>
  );
}

export default App;