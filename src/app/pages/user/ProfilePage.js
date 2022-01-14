import React, { useState } from "react";
import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import UserData from "../../components/user/UserData";
import UserDataUpdate from "../../components/user/UserDataUpdate";
import Watchlist from "../../components/user/Watchlist";
import { useAuth } from "../../components/contexts/AuthContext";

const ProfilePage = () => {
  const { users } = useAuth;
  const [updateForm, setUpdateForm] = useState(false);

  const changeToUpdate = (change) => {
    setUpdateForm(change);
  };

  return (
    <Box>
      <Box mt={5}>
        <Text>{users?.uid}</Text>
        <Grid templateColumns="repeat(20, 1fr)">
          <GridItem colSpan={1}>
            {updateForm === false ? (
              <UserData changeToUpdate={changeToUpdate} user={users} />
            ) : (
              <UserDataUpdate changeToUpdate={changeToUpdate} />
            )}
          </GridItem>
          <Divider orientation="vertical" />
          <GridItem colSpan={18}>
            <Watchlist user={users?.watchlist} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfilePage;
