import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { FiDownload } from "react-icons/fi"
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I am <br />
        Ayush Tyagi
      </SectionTitle>
      <SectionText>
        Web Developer.  Coder.  Learner
      </SectionText>
      <Button onClick={() => window.location = '#connect'} >Let's Connect!</Button>
      <Button onClick={() => window.location.href = 'https://drive.google.com/file/d/16d7raKoM48OXVnbMn-5CwHGPX3rffbqi/view?usp=sharing'} >My Resume
        <FiDownload />
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;