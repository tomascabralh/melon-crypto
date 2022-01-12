import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../../contexts/AuthContext";

const UserMenu = () => {
  const { logout } = useAuth();

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          variant="outline"
          size="sm"
        />
        <MenuList>
          <MenuItem
            as={Link}
            href={`/profile`}
            style={{ textDecoration: "none" }}
          >
            Profile
          </MenuItem>
          <MenuItem
            as={Link}
            href={`/user/portfolio`}
            style={{ textDecoration: "none" }}
          >
            Portfolio
          </MenuItem>
          <MenuItem
            as={Link}
            href={`/profile`}
            style={{ textDecoration: "none" }}
          >
            Account Settings
          </MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
