import React from "react";
import { DiReact } from "react-icons/di";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
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
    </List>
  </Section>
);

export default Technologies;
