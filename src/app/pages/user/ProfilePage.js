import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import UserData from "../../components/user/UserData";
import UserDataUpdate from "../../components/user/UserDataUpdate";
import Watchlist from "../../components/user/Watchlist";
import { useAuth } from "../../components/contexts/AuthContext";
import SpinnerUI from "../../components/UI/Spinner";
import { useLocation } from "react-router-dom";

const ProfilePage = (props) => {
  const { users } = useAuth();
  const [updateForm, setUpdateForm] = useState(false);

  const { state } = useLocation();

  const changeToUpdate = (change) => {
    setUpdateForm(change);
  };

  useEffect(() => {
    if (state !== null) {
      setUpdateForm(state?.update);
    }
  }, [state]);
  return (
    <Box>
      <Box mt={5}>
        <Text>{users?.uid}</Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 3fr)",
            sm: "repeat(1, 3fr)",
            md: "repeat(1, 3fr)",
            lg: "repeat(20, 1fr)",
            xl: "repeat(20, 1fr)",
          }}
        >
          {users ? (
            <GridItem colSpan={1}>
              {updateForm === false ? (
                <UserData changeToUpdate={changeToUpdate} />
              ) : (
                <UserDataUpdate changeToUpdate={changeToUpdate} />
              )}
            </GridItem>
          ) : (
            <SpinnerUI />
          )}
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
