import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Life from "@/sections/Life";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Life />
      <Footer />
    </main>
  );
}
