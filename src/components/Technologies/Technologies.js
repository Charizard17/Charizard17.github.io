import React from "react"
import {DiFirebase, DiReact, DiZend} from "react-icons/di"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles"

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Technologies I'm familiar with:
      <br />
      JavaScript, HTML, CSS, Dart, Flutter, NodeJS, AWS, Ionic, Angular, React,
      REST API, SQL, Socket.IO, Firebase
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Flutter, Angular, React, Ionic
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Sketch and Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
    <br />
  </Section>
)

export default Technologies
