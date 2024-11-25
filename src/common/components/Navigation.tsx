import { Flex, Heading } from "@chakra-ui/react";
import { FaFrog, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import { Tag } from "../../chakra/components/ui/tag";


export function Navigation() {
  return (
    <Flex
      color={"green.100"}
      minH={55}
      mx={"auto"}
      align={"center"}
      justify={"space-between"}
      p={5}
      w={"100%"}
      position={"sticky"}
      top={5}
    >
      <Flex align={"center"} gap={2}>
        <FaFrog size={21} />
        <Heading fontWeight={"bold"}>Piero Dev</Heading>
        {/* <FaGithub size={21}/> */}
      </Flex>

      <Flex as={"nav"} gap={5} >
        <Link to={"#contact"}>Contact</Link>
        <Link to={"#my-work"}>Work</Link>
        <Link to={"#my-experience"}>Career</Link>
        <Link to={"#newsletter"}>Newsletter <Tag ms={1} colorPalette={"yellow"} fontWeight={"bold"}>Coming Soon</Tag></Link>
        <Flex gap={3}>
          <Link to={"https://github.com/PieroDev23"} target="_blank">
            <FaGithub size={21} />
          </Link>
          <Link to={"https://www.linkedin.com/in/piero-davila/"} target="_blank">
            <FaLinkedin size={21} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
} 