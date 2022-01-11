import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
          <MenuItem>Watchlist</MenuItem>
          <MenuItem>Portfolio</MenuItem>
          <MenuItem>Update Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
