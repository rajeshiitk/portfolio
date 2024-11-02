import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import ProjectPage from "./project/page";
import Contact from "@/components/contact/Contact";
import Skills from "@/components/about/Skills";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Separator /> */}

      {/* <div className="px-4 py-4  min-h-screen">
        <h2 className="text-3xl font-bold text-center my-6">Tech-Stack</h2>
        <Skills />
      </div> */}
      <ProjectPage />
      <Contact />
    </main>
  );
}
