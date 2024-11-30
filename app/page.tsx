"use client"

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Navbar></Navbar>
      <main>
        <section id="home" style={{marginTop: "200px", marginLeft: "60px"}}>
          <Flex flexDir={"column"} className="to-up-anim">
            <Box id="main-title">
              <Heading fontSize={80}>Rayan Ereteo</Heading>
              <Text mt={"50px"} w={"800px"} fontStyle={"italic"} fontWeight={"bold"}>Je suis Rayan, un développeur full stack de 22 ans, passionné d'informatique depuis tout jeune, j'ai découvert la programmation avec le moteur de jeu Unity. Naturellement je me suis intéressé de plus en plus à la programmation, ce qui m'a mené où je suis aujourd'hui. Spécialisé dans le développement full stack, je suis à la recherche de nouvelles missions et opportunités pour améliorer mes compétences.</Text>
            </Box>
            <HStack mt={6} spaceX={"10"} ml={"6"}>
              <Button backgroundColor={"blue"}>Me contacter</Button>
              <Button backgroundColor={"white"} color={"black"}>Mes projets</Button>
            </HStack>
          </Flex>
        </section>
      </main>
    </Box>
  )
}