import React from "react"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import {} from "./ResumeStyles"
import Button from "../../styles/GlobalComponents/Button"
// import resume from "../../../public/files/resume.pdf"

const Resume = () => (
  <Section id="resume">
    <SectionDivider />
    <br />
    <SectionTitle>Resume</SectionTitle>
    <SectionText>
      You can view or download my latest resume by clicking the button below.
    </SectionText>
    <a
      href="https://drive.google.com/file/d/11-PJumJE4YTnBSK4EKjhcgCFRTH1vjog/view?usp=sharing"
      target="_blank"
    >
      <Button>View resume</Button>
    </a>
    <SectionDivider />
  </Section>
)

export default Resume
