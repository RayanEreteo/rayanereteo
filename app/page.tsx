import Navbar from "@/components/Navbar";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Navbar></Navbar>
      <main>
        <section id="home" style={{marginTop: "200px", marginLeft: "60px"}}>
          <Flex flexDir={"row"}>
            <Box id="main-title">
              <Heading fontSize={80}>Rayan Ereteo</Heading>
              <Text mt={"50px"}>Je suis Rayan, un développeur de 22 ans, </Text>
            </Box>
          </Flex>
        </section>
      </main>
    </Box>
  )
}