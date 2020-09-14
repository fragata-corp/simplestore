import { Box, Image, Text, Button, Flex } from "@chakra-ui/core"
import React from "react"

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
        <Button
          variantColor="gray"
          variant="outline"
          fontWeight="200"
          size="sm"
        >
          Detalhes
        </Button>
      </Flex>
    </Box>
  )
}

export default Card
