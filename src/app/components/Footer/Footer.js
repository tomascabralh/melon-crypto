import { Box, Center, Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import React from "react";
import SocialMedia from "./SocialMedia";
import Copyright from "./Copyright";
import Legal from "./Legal";
import Suscription from "./SuscriptionForm";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Melon from "../../../images/melon-logo.png";

const Footer = () => {
  const bg = useColorModeValue("#9AE6B4", "green.700");
  const color = useColorModeValue("black", "gray.50");

  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      width="100%"
      position="absolute"
    >
      <Grid
        templateColumns={{
          base: "repeat(3, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        h="21vh"
        bgColor={bg}
        color={color}
        pt={4}
        width="100%"
      >
        <GridItem>
          <Legal />
        </GridItem>
        <GridItem>
          <Suscription />
        </GridItem>
        <GridItem>
          <VStack>
            <Box display={{ base: "none", md: "block", lg: "block" }}>
              <Image
                src={Melon}
                alt="melon-crypto"
                htmlHeight={210}
                htmlWidth={240}
              />
            </Box>
            <Center>
              <SocialMedia />
            </Center>
          </VStack>
        </GridItem>
      </Grid>
      <Copyright />
    </Box>
  );
};

export default Footer;
