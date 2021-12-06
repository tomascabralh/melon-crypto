import React from "react";
import { Box, Text, Link } from "@chakra-ui/layout";

const HeaderMenu = (props) => {
  const headerMenuItems = props.menuItems.map((item) => (
    <Box
      marginRight={6}
      display={{ base: "none", md: "block" }}
      key={item.name}
    >
      <Link href={item.link} style={{ textDecoration: "none" }}>
        <Text textAlign="center">{item.name}</Text>
      </Link>
    </Box>
  ));
  return <>{headerMenuItems}</>;
};

export default HeaderMenu;
