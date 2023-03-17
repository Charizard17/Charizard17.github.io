import React from "react"

import {Section, SectionText, SectionTitle} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import {LeftSection} from "./HeroStyles"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aliquid
        aspernatur ex eius ipsa ducimus enim ullam? Et quo cupiditate
        repudiandae, vel in ullam consequuntur voluptas iste corporis, nihil
        porro.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
