import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import ProjectPage from "./project/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectPage />
    </main>
  );
}
