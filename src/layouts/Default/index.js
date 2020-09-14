import React from "react"
import { Box } from "@chakra-ui/core"
import Header from "../../components/Header"

function Default({ children }) {
  return (
    <Box padding="0 10%">
      <Header />
      <Box as="main">{children}</Box>{" "}
    </Box>
  )
}

export default Default
