import React from "react";
import PROFILE_PIC from "../../assets/img/profile-pic.jpg";
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Projects } from "../../components/projects/projects";
import { Skills } from "./skills/skills";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero image={PROFILE_PIC} />
      <About />
      <Projects />
      <Skills />
    </>
  );
};

export { Home };
