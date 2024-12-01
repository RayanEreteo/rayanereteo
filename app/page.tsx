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
        <section className="to-up-anim" style={{ marginTop: "200px", marginLeft: "60px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
          <Flex flexDir={"column"} id="main-title">
            <HStack mb={10} spaceX={4}>
              <Link href="https://github.com/RayanEreteo" target="_blank"><BsGithub size={40} color="cyan" /></Link>
              <Link href="https://www.linkedin.com/in/rayan-ereteo-6998b9254/" target="_blank"><BsLinkedin size={40} color="cyan" /></Link>
            </HStack>
            <Box>
              <Heading fontSize={80}>Rayan Ereteo</Heading>
              <Text mt={"50px"} w={"800px"} fontStyle={"italic"} fontWeight={"bold"}>Je suis Rayan, un développeur full stack de 22 ans, passionné d'informatique depuis tout jeune, j'ai découvert la programmation avec le moteur de jeu Unity. Naturellement je me suis intéressé de plus en plus à la programmation, ce qui m'a mené où je suis aujourd'hui. Spécialisé dans le développement full stack, je suis à la recherche de nouvelles missions et opportunités pour améliorer mes compétences.</Text>
            </Box>
            <HStack mt={6} spaceX={"10"} ml={"6"}>
              <a href="#contact"><Button backgroundColor={"blue"}>Me contacter</Button></a>
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
        <section id="tech" style={{ marginTop: "10rem" }}>
          <hr></hr>
          <Heading mt={10} textAlign={"center"} fontSize={80}>Compétences</Heading>
          <Flex alignContent={"center"} justifyContent={"center"} flexDir={"column"}>
            <Heading mt={20} textAlign={"center"} fontSize={40}>Langages</Heading>
            <Flex className="language" justifyContent={"space-around"} flexDir={"row"} mt={10} overflow={"hidden"}>
              <Image src="/html.svg" w={"50px"} title="html"></Image>
              <Image src="/css.svg" w={"50px"} title="css"></Image>
              <Image src="/js.svg" w={"50px"} title="Javascript"></Image>
              <Image src="/php.svg" w={"50px"} title="PHP"></Image>
              <Image src="/python.svg" w={"50px"} title="Python"></Image>
            </Flex>
            <Heading mt={20} textAlign={"center"} fontSize={40}>Frameworks</Heading>
            <Flex className="language" justifyContent={"space-around"} flexDir={"row"} mt={10}>
              <Image src="/react.svg" w={"50px"} title="React"></Image>
              <Image src="/node.svg" w={"50px"} title="NodeJS"></Image>
              <Image src="/symfony.svg" w={"50px"} title="Symfony" filter={"brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(3%) hue-rotate(224deg) brightness(104%) contrast(100%)"}></Image>
            </Flex>
          </Flex>
        </section>
        <section id="projects" style={{ marginTop: "10rem" }}>
          <hr></hr>
          <Heading mt={10} textAlign={"center"} fontSize={80}>Projets</Heading>
        </section>
      </main>
    </Box>
  )
}