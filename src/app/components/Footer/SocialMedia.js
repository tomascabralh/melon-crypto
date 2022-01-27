import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { ButtonGroup, Grid, IconButton } from "@chakra-ui/react";

const SocialMedia = (props) => {
  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <Grid
        templateColumns={{
          base: props.base,
          sm: props.base,
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: 7, sm: 7, md: 4, lg: 4 }}
      >
        <IconButton
          as="a"
          href="https://www.instagram.com/tch._.tch/?hl=es"
          aria-label="Instagram"
          isRound="true"
          target="_blank"
          icon={<FaInstagram fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://www.facebook.com/tomicabral"
          aria-label="Facebook"
          isRound="true"
          target="_blank"
          icon={<FaFacebook fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://twitter.com/zurba96"
          aria-label="Twitter"
          isRound="true"
          target="_blank"
          icon={<FaTwitter fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/facudom/"
          aria-label="Linkedin"
          isRound="true"
          target="_blank"
          icon={<FaLinkedinIn fontSize="20px" />}
        />
      </Grid>
    </ButtonGroup>
  );
};

export default SocialMedia;
