import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Header />
        <Intro/>
        <SectionDivider/>
        <About/>
        <SectionDivider/>
        <Projects/>
        <SectionDivider/>
        <Skills/>
        <SectionDivider/>
        <Education/>
        <SectionDivider/>
        <Contact/>
    </main>
  );
}
