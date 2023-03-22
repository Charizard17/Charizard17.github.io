import React from "react"

import {Section, SectionText, SectionTitle} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import {LeftSection} from "./HeroStyles"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello 👋
        <br />
        I'm Esad
      </SectionTitle>
      <SectionText>
        I am a self-taught Software Engineer, experienced mostly Frontend
        development and interested in JavaScript, Flutter and AWS Cloud
        technologies. I am eager to learn new technologies and love to improve
        my skills in these areas.
      </SectionText>
      {/* <Button onClick={() => (window.location = "my-website")}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
)

export default Hero
