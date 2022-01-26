import React from "react";
import { Box, Text, Link } from "@chakra-ui/layout";

const HeaderMenu = (props) => {
  const headerMenuItems = props.menuItems.map((item) => (
    <Box mr={6} key={item.name} mt={props.mt ? props.mt : 0}>
      <Link href={item.link} style={{ textDecoration: "none" }}>
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
