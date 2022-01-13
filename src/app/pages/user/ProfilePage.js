import React, { useState } from "react";
import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";
import UserData from "../../components/user/UserData";
import UserDataUpdate from "../../components/user/UserDataUpdate";
import Watchlist from "../../components/user/Watchlist";

const ProfilePage = () => {
  const [updateForm, setUpdateForm] = useState(false);

  const changeToUpdate = (change) => {
    setUpdateForm(change);
  };

  return (
    <Box>
      <Box mt={5}>
        <Grid templateColumns="repeat(20, 1fr)">
          <GridItem colSpan={1}>
            {updateForm === false ? (
              <UserData changeToUpdate={changeToUpdate} />
            ) : (
              <UserDataUpdate changeToUpdate={changeToUpdate} />
            )}
          </GridItem>
          <Divider orientation="vertical" />
          <GridItem colSpan={18}>
            <Watchlist />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfilePage;
