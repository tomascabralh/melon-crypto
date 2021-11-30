import {
  Box,
  Center,
  Grid,
  GridItem,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import SocialMedia from "./SocialMedia";
import Copyright from "./Copyright";
import About from "./About";
import Legal from "./Legal";
import Suscription from "./SuscriptionForm";

function Footer() {
  return (
    <Box as="footer" role="contentinfo" mx="auto">
      <Grid
        templateColumns="repeat(6, 1fr)"
        h="200px"
        bgColor="#9AE6B4"
        pl={8}
        pt={4}
      >
        <GridItem>
          <About />
        </GridItem>
        <GridItem>
          <Legal />
        </GridItem>
        <GridItem colSpan={2}>
          <Suscription></Suscription>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Box h="130px" textAlign="center">
              🍈Logo de Melon Cripto xd🍈
            </Box>
            <Center>
              <SocialMedia />
            </Center>
          </Box>
        </GridItem>
      </Grid>
      <Copyright />
    </Box>
  );
}

export default Footer;
