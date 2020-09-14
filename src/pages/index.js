import React from "react"

import SEO from "../components/seo"
import { Flex } from "@chakra-ui/core"

import Card from "../components/Card"
import Default from "../layouts/Default"

const IndexPage = () => (
  <Default>
    <SEO title="Home" />
    <Flex
      p="10px 8%"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </Flex>
  </Default>
)

export default IndexPage
