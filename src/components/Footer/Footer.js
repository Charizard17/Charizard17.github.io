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
          <LinkItem href="tel:123-456-7890">123-456-7890</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mail:test@mail.com">test@mail.com</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </LinkList>
    </FooterWrapper>
  )
}

export default Footer
