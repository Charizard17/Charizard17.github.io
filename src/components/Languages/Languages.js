import React from "react"

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents"
import {Box, Boxes, BoxNum, BoxText} from "./LanguagesStyles"
import {languages} from "../../constants/constants"

const Languages = () => (
  <Section>
    <SectionTitle>Languages</SectionTitle>
    <Boxes>
      {languages.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.level}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Languages
