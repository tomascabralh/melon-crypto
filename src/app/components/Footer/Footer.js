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

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" mx="auto">
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(6, 1fr)",
          md: "repeat(6, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        h="200px"
        bgColor="#9AE6B4"
        pl={8}
        pt={4}
        width="100%"
      >
        <GridItem>
          <About />
        </GridItem>
        <GridItem>
          <Legal />
        </GridItem>
        <GridItem colSpan={2}>
          <Suscription />
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Box
              h="130px"
              textAlign="center"
              display={{ base: "none", sm: "block", lg: "block" }}
            >
              🍈Logo de Melon Cripto xd🍈
            </Box>
            <Center>
              <SocialMedia
                display={{ base: "none", sm: "block", lg: "block" }}
              />
            </Center>
          </Box>
        </GridItem>
      </Grid>
      <Copyright />
    </Box>
  );
};

export default Footer;
