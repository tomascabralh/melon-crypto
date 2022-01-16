import {
  Divider,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Spacer,
  Grid,
  GridItem,
  Image,
  Textarea,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { getDatabase, ref, set, onValue } from "firebase/database";
import Avatar from "../../../../images/user/DefaultAvatar.png";

const CreateComment = ({ title }) => {
  const { currentUser, users } = useAuth();
  const toast = useToast();

  const [msg, setMsg] = useState();
  const [countComments, setCountComments] = useState();

  const submitComment = async () => {
    if (msg !== null || msg !== "") {
      await set(ref(getDatabase(), `comments/${title}/com/` + countComments), {
        userID: currentUser?.uid,
        photoURL: users?.photoURL,
        user: users?.username,
        message: msg,
        date: "ogete",
        //new Date().toISOString().slice(0, 19).replace("T", " "),
      });
    }
  };

  useEffect(() => {
    const starCountRef = ref(getDatabase(), `comments/${title}/com`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        setCountComments(0);
      } else {
        setCountComments(Object.keys(data).length);
      }
    });
  }, []);

  return (
    <>
      <Grid templateColumns="repeat(10 ,1fr)">
        <GridItem colSpan={2}>
          <Image
            src={users?.photoURL}
            alt={users?.uid}
            fallbackSrc={Avatar}
            borderRadius="full"
            boxSize="150px"
          />
        </GridItem>
        <GridItem colSpan={7}>
          <FormControl>
            <FormLabel htmlFor="Comment"></FormLabel>
            <Text mb={5}>{users?.username} comments: </Text>
            <Textarea
              id="comment"
              placeholder="Comment here"
              size={"lg"}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            colorScheme="teal"
            w="100%"
            h="100%"
            mx={30}
            ml={50}
            type="submit"
            onClick={submitComment}
          >
            Submit
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default CreateComment;
