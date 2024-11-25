import { Heading, Stack, Text } from "@chakra-ui/react";
import { Button } from "../chakra/components/ui/button";
import { Section } from "../common";


export default function HomePage() {
  return (
    <>
      <Stack gap={3} justify={"center"} align={"center"} w={{ base: "100%", md: "3/5" }} mx={"auto"}>
        <Heading textAlign={"center"} size={"5xl"} mb={3}>
          Let’s Build Greatness Together. <br /> From Start to Finish.
        </Heading>
        <Text lineHeight={1.8} textAlign={"center"} color={"whiteAlpha.700"}>
          I specialize in front-end development for high-traffic, high-demand applications. I create efficient, scalable and pixel perfect solutions that deliver seamless user experiences.
        </Text>
        <Button color={"green.100"} borderColor={"green.100"} _hover={{ bg: "unset" }} w={"fit"} variant={"outline"} mt={3}>Get in touch ✨</Button>
      </Stack>
      <Section>
      </Section>
    </>
  )
} 
