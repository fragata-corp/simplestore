import React from "react"
import { Flex, Button, Text } from "@chakra-ui/core"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "gatsby"

function Header() {
  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      w="100%"
      alignItems="center"
      padding="20px 10%"
    >
      <Link to="/">
        <Text fontSize="2xl">SimpleStore</Text>
      </Link>
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
