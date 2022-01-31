import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
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
          icon={<GiHamburgerMenu fontSize="22px" />}
          size="sm"
          variant="link"
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
          <Link
            as={ReachLink}
            to={`/profile`}
            state={{ update: true }}
            style={{ textDecoration: "none" }}
          >
            <MenuItem>Account Settings</MenuItem>
          </Link>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
