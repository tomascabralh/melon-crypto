import React from "react";
import { Box, Text, Link } from "@chakra-ui/layout";
import { Link as ReachLink } from "react-router-dom";

const HeaderMenu = (props) => {
  const headerMenuItems = props.menuItems.map((item) => (
    <Box
      mr={6}
      key={item.name}
      mt={props.mt ? props.mt : 0}
      display={{ base: props.base, md: "block" }}
    >
      <Link
        as={ReachLink}
        to={item.link}
        state={{ update: item.update }}
        style={{ textDecoration: "none" }}
        onClick={() => {
          props?.click();
        }}
      >
        <Text
          textAlign="center"
          fontWeight="500"
          fontSize={props.fontS ? props.fontS : null}
        >
          {item.name}
        </Text>
      </Link>
    </Box>
  ));
  return <>{headerMenuItems}</>;
};

export default HeaderMenu;
