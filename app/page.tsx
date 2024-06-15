'use client'
import Image from "next/image";
import Header from "./components/global/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Hover from "./components/sections/HoverImageLinks";
import Footer from "./components/global/Footer";
import { ReactLenis, useLenis } from 'lenis/react';


export default function Home() {
  return (
    <main className="antialiased">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      {/* <Hover/> */}
      <Footer/>
    </main>
  );
}
