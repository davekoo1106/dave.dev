import Image from "next/image";
import Header from "./components/global/Header";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="antialiased">
      <Header/>
      <Hero/>
    </main>
  );
}
