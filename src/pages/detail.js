import React from "react"
import SEO from "../components/seo"
import Default from "../layouts/Default"
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import { GrClose } from "react-icons/gr"

const Detail = () => (
  <Default>
    <SEO title="Detalhes" />
    <Flex
      shadow="sm"
      border="solid 1px #ddd"
      m="0 auto"
      padding="30px 15px 30px 15px"
      justifyContent="space-between"
      flexWrap="wrap"
      maxW="800px"
    >
      <Box minW="30%">
        <Box mt="-10px">
          <Link to="/">
            <GrClose size="24" />
          </Link>
        </Box>
        <Image
          m="0 auto"
          size="180px"
          objectFit="cover"
          src="http://upload.wikimedia.org/wikipedia/commons/c/c6/Grey_Tshirt.jpg"
          alt="Segun Adebayo"
        />
      </Box>
      <Flex minW="70%" flexWrap="wrap">
        <Flex width="100%" flexDirection="column">
          <Text fontSize="3xl">Awesome T-shirt</Text>
          <Text fontSize="1xl">This is a really Awesome T-shirt</Text>
          <Text fontWeight="bold">15.99</Text>
          <FormControl>
            <FormLabel htmlFor="qty">Quantidade</FormLabel>
            <Input type="number" id="qty" defaultValue="1" maxW="50px" />
          </FormControl>
          <Flex w="100%">
            <FormControl>
              <FormLabel htmlFor="size">Tamanho</FormLabel>
              <Select variant="outline" id="size" maxW="100px">
                <option value="P"> P </option>
                <option value="M"> M </option>
                <option value="G"> G </option>
                <option value="GG"> GG </option>
              </Select>
            </FormControl>
            <FormControl ml="10%">
              <FormLabel htmlFor="color">Cor</FormLabel>
              <Select variant="outline" id="color" maxW="100px">
                <option value="blue"> Azul </option>
                <option value="green"> Verde </option>
                <option value="gray"> Cinza </option>
                <option value="yellow"> Amarelo </option>
              </Select>
            </FormControl>
          </Flex>
        </Flex>
        <Button m="auto 0 0 auto" variant="outline" color="gray">
          Adicionar
        </Button>
      </Flex>
    </Flex>
  </Default>
)

export default Detail
