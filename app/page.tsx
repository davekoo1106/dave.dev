'use client'
import Image from "next/image";
import Header from "./components/global/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects"
import { ReactLenis, useLenis } from 'lenis/react';


export default function Home() {
  return (
    <main className="antialiased">
      <Header/>
      <Hero/>
      <Projects/>
    </main>
  );
}
