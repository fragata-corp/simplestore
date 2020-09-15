import React from "react"
import { Box, Image, Text, Flex } from "@chakra-ui/core"
import { Link } from "gatsby"

function Card() {
  return (
    <Box shadow="sm" border="solid 1px #ddd" padding="3%" m="20px">
      <Image
        size="180px"
        objectFit="cover"
        src="http://upload.wikimedia.org/wikipedia/commons/c/c6/Grey_Tshirt.jpg"
        alt="Segun Adebayo"
      />
      <Text fontSize="2xl">Awesome T-shirt</Text>
      <Flex justifyContent="space-between" alignItems="center" marginTop="10px">
        <Text fontWeight="bold">15.99</Text>
        <Link to="/detail">
          <Text color="blue.500">Detalhes</Text>
        </Link>
      </Flex>
    </Box>
  )
}

export default Card
