import React from "react"
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai"

import {SocialIcons} from "../Header/HeaderStyles"
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
} from "./FooterStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+4917658867810">+4917658867810</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mail:3723esad@gmail.com">3723esad@gmail.com</LinkItem>
        </LinkColumn>
        {/* <SocialIconsContainer>
          <Slogan>Lorem ipsum, dolor sit amet consectetur adipisicing.</Slogan>
        </SocialIconsContainer> */}
        <SocialContainer>
          <SocialIcons href="https://github.com/charizard17">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/charizard17">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </LinkList>
    </FooterWrapper>
  )
}

export default Footer
