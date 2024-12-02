import { Box, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react"
import { Button } from "./ui/button"

interface projectProperties {
    projectName: string,
    description: string,
    ended: boolean,
    completionDate?: string,
    projectLink: string
}

function Project({ projectName, description, ended, completionDate, projectLink }: projectProperties) {
    return (
        <Flex className="project" border={"3px solid cyan"} mt={6} borderRadius={"10px"} flexDir={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
        </Flex>
    )
}

export default Project


{/* <HStack spaceY={10}>
<Heading fontSize={20} fontWeight={"bolder"}>{projectName}</Heading>
<Text color={ended ? "green" : "white"} fontWeight={"bolder"}>{ended ? "Projet terminée" : "En cours de developpment..."}</Text>
</HStack>
<HStack spaceY={20}>
<Text w={300}>{description}</Text>
<Text>{completionDate}</Text>
</HStack> */}