import { HStack, Link } from "@chakra-ui/react"

function Navbar() {
  return (
    <header>
      <nav>
        <HStack backgroundColor={"rgba(0, 0, 0, 0.20)"} p={"6"} spaceX={"11"} fontSize={30}>
          <Link href={"/"} color={"white"} transition={"all 0.2s"} _hover={{ textDecoration: "underline", scale: 1.1 }}>Acceuil</Link>
          <Link href={"/"} color={"white"} transition={"all 0.2s"} _hover={{ textDecoration: "underline", scale: 1.1 }}>Compétences</Link>
          <Link href={"/"} color={"white"} transition={"all 0.2s"} _hover={{ textDecoration: "underline", scale: 1.1 }}>Projets</Link>
          <Link href={"/"} color={"white"} transition={"all 0.2s"} _hover={{ textDecoration: "underline", scale: 1.1 }}>Contact</Link>
        </HStack>
      </nav>
    </header>
  )
}

export default Navbar