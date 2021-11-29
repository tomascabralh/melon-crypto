import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { ButtonGroup, IconButton } from "@chakra-ui/react";

function SocialMedia(props) {
  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton
        as="a"
        href="#"
        aria-label="Instagram"
        icon={<FaInstagram fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="#"
        aria-label="Facebook"
        icon={<FaFacebook fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="#"
        aria-label="Twitter"
        icon={<FaTwitter fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="#"
        aria-label="Linkedin"
        icon={<FaLinkedinIn fontSize="20px" />}
      />
    </ButtonGroup>
  );
}

export default SocialMedia;
