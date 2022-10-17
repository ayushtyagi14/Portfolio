import React from "react";
import { DiReact } from "react-icons/di";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoFirebase, IoLogoGitlab } from "react-icons/io5";
import { SiNextdotjs, SiAngular, SiRedux, SiTailwindcss, SiBootstrap, SiMaterialui, SiMysql, SiExpress, SiMongodb, SiGithub, SiVercel, SiNetlify } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I love exploring new technologies and these are the tech stack I've
      learned so far.
    </SectionText>
    <List>
      <ListItem>
        <IoLogoHtml5 size="5rem" />
        <ListTitle>HTML</ListTitle>
      </ListItem>
      <ListItem>
        <IoLogoCss3 size="5rem" />
        <ListTitle>CSS</ListTitle>
      </ListItem>
      <ListItem>
        <IoLogoJavascript size="5rem" />
        <ListTitle>JavaScript</ListTitle>
      </ListItem>
      <ListItem>
        <DiReact size="5rem" />
        <ListTitle>React</ListTitle>
      </ListItem>
      <ListItem>
        <SiNextdotjs size="5rem" />
        <ListTitle>NextJs</ListTitle>
      </ListItem>
      <ListItem>
        <SiAngular size="5rem" />
        <ListTitle>Angular</ListTitle>
      </ListItem>
      <ListItem>
        <SiRedux size="5rem" />
        <ListTitle>Redux</ListTitle>
      </ListItem>
      <ListItem>
        <IoLogoNodejs size="5rem" />
        <ListTitle>NodeJs</ListTitle>
      </ListItem>
      <ListItem>
        <SiExpress size="5rem" />
        <ListTitle>ExpressJs</ListTitle>
      </ListItem>
      <ListItem>
        <IoLogoFirebase size="5rem" />
        <ListTitle>Firebase</ListTitle>
      </ListItem>
      <ListItem>
        <SiTailwindcss size="5rem" />
        <ListTitle>TailwindCSS</ListTitle>
      </ListItem>
      <ListItem>
        <SiBootstrap size="5rem" />
        <ListTitle>Bootstrap</ListTitle>
      </ListItem>
      <ListItem>
        <SiMaterialui size="5rem" />
        <ListTitle>Material UI</ListTitle>
      </ListItem>
      <ListItem>
        <SiMongodb size="5rem" />
        <ListTitle>MongoDB</ListTitle>
      </ListItem>
      <ListItem>
        <SiMysql size="5rem" />
        <ListTitle>MySQL</ListTitle>
      </ListItem>
      <ListItem>
        <SiGithub size="5rem" />
        <ListTitle>GitHub</ListTitle>
      </ListItem>
      <ListItem>
        <IoLogoGitlab size="5rem" />
        <ListTitle>GitLab</ListTitle>
      </ListItem>
      <ListItem>
        <SiVercel size="5rem" />
        <ListTitle>Vercel</ListTitle>
      </ListItem>
      <ListItem>
        <SiNetlify size="5rem" />
        <ListTitle>Netlify</ListTitle>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
