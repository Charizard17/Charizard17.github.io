import Link from "next/link"
import Image from "next/image"
import React from "react"
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai"
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles"
import image from "../../../public/images/charizard-icon.png"

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <div>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "-5px",
              cursor: "pointer",
            }}
          >
            <Image src={image} width="40" height="40" />
            <Span>&shy; Portfolio</Span>
          </a>
        </div>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
