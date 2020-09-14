import { Flex, Button, Text, DarkMode } from "@chakra-ui/core"
import { FaShoppingCart } from "react-icons/fa"
import React from "react"
function Header() {
  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      w="100%"
      alignItems="center"
      padding="20px 10%"
    >
      <Text fontSize="2xl">SimpleStore</Text>

      <Button
        p="0 20px"
        size="sm"
        variantColor="blue"
        leftIcon={FaShoppingCart}
        variant="solid"
        color="#fff"
      >
        CART $15.99
      </Button>
    </Flex>
  )
}

export default Header
