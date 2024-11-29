"use client"

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
              <Text mt={"50px"} w={"800px"}>Je suis Rayan, un développeur full stack de 22 ans, passionné d'informatique depuis tout jeune, j'ai découvert la programmation avec le moteur de jeu Unity. Naturellement je me suis intéressé de plus en plus à la programmation.</Text>
            </Box>
          </Flex>
        </section>
      </main>
    </Box>
  )
}