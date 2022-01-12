import React, { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import UserData from "../../components/user/UserData";
import UserDataUpdate from "../../components/user/UserDataUpdate";

const ProfilePage = () => {
  const [updateForm, setUpdateForm] = useState(false);

  const changeToUpdate = (change) => {
    setUpdateForm(change);
  };

  return (
    <Box>
      <Box mt={5}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem colSpan={1} borderRight="1px" borderColor="gray.200">
            {updateForm === false ? (
              <UserData changeToUpdate={changeToUpdate} />
            ) : (
              <UserDataUpdate changeToUpdate={changeToUpdate} />
            )}
          </GridItem>
          <GridItem colSpan={2}>Watchlist</GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfilePage;
