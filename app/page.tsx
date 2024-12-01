"use client"

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Box, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {

  const bioList = {
    Nom: "Ereteo Rayan , Sofiane",
    Sexe: "M",
    Age: 22,
    Taille: "1m65",
  }

  return (
    <Box>
      <Navbar />
      <main>
        <section className="to-up-anim" id="home" style={{marginTop: "200px", marginLeft: "60px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
          <Flex flexDir={"column"} id="main-title">
            <HStack mb={10} spaceX={4}>
              <Link href="https://github.com/RayanEreteo" target="_blank"><BsGithub size={40} color="cyan"/></Link>
              <Link href="https://www.linkedin.com/in/rayan-ereteo-6998b9254/" target="_blank"><BsLinkedin size={40} color="cyan"/></Link>
            </HStack>
            <Box>
              <Heading fontSize={80}>Rayan Ereteo</Heading>
              <Text mt={"50px"} w={"800px"} fontStyle={"italic"} fontWeight={"bold"}>Je suis Rayan, un développeur full stack de 22 ans, passionné d'informatique depuis tout jeune, j'ai découvert la programmation avec le moteur de jeu Unity. Naturellement je me suis intéressé de plus en plus à la programmation, ce qui m'a mené où je suis aujourd'hui. Spécialisé dans le développement full stack, je suis à la recherche de nouvelles missions et opportunités pour améliorer mes compétences.</Text>
            </Box>
            <HStack mt={6} spaceX={"10"} ml={"6"}>
              <a href="#home"><Button backgroundColor={"blue"}>Me contacter</Button></a>
              <a href="#projects"><Button backgroundColor={"black"}>Mes Projets</Button></a>
            </HStack>
          </Flex>
          <Flex flexDir={"column"} textAlign={"center"} id="bio">
            <Image border="5px solid blue" src="/moi.png" width={400} height={400} borderRadius={"30px"}></Image>
            <VStack mt={6}>
              {Object.keys(bioList).map((key, index) => {
                return <Text fontWeight={"bold"} key={index}>{`${key} : ${bioList[key as keyof Object]}`}</Text>
              })}
            </VStack>
          </Flex>
        </section>
        <section id="tech" style={{position: "relative", top: "200px"}}>
          <hr></hr>
          <Heading mt={10} textAlign={"center"} fontSize={80}>Compétences</Heading>
          <Flex alignContent={"center"} justifyContent={"center"} flexDir={"column"}>
              <Flex className="language"></Flex> 
          </Flex>
        </section>
      </main>
    </Box>
  )
}