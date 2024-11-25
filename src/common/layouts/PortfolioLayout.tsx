import { Outlet } from "react-router";
import { Navigation } from "../components";
import { Box, Container } from "@chakra-ui/react";


export function PortfolioLayout() {
  return (
    <>
      <Container position={"relative"}>
        <Navigation />
        <Box as={"main"} pt={144}>
          <Outlet />
        </Box>
      </Container>
    </>
  )
}