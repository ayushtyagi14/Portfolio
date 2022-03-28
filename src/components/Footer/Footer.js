import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="connect">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ayush.tyagi145@gmail.com">
            ayush.tyagi145@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://www.instagram.com/ayushhtyagi14/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/ayushhtyagi">
            <AiOutlineTwitter size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ayush-tyagi-77b974145/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/ayushtyagi14">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <br />
      <br />
      <Slogan>Created by <a href="https://portfolio-ayushtyagi14.vercel.app/">Ayush Tyagi</a></Slogan>
    </FooterWrapper>
  );
};

export default Footer;
