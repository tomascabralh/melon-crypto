import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  VStack,
  Image,
  Text,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Avatar from "../../../../images/user/DefaultAvatar.png";
import { useAuth } from "../../contexts/AuthContext";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Comments = ({ title }) => {
  const { currentUser, users } = useAuth();
  const [backendComments, setBackendComments] = useState([]);

  const bg = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("black", "gray.200");

  const deleteComment = () => {
    "asd";
  };

  useEffect(() => {
    const starCountRef = ref(getDatabase(), `comments/${title}/com`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setBackendComments(data);
    });
  });

  return (
    <>
      {backendComments?.map((comment) => {
        return (
          <Flex my={10}>
            <Box>
              <Image
                src={comment?.photoURL}
                alt={comment?.userID}
                fallbackSrc={Avatar}
                borderRadius="full"
                boxSize="100px"
              />
            </Box>
            <Box w="100%" pl={10}>
              <HStack>
                <Text>
                  {comment?.user} comments on {comment?.date}{" "}
                </Text>
                <Spacer />
                {comment?.userID === currentUser?.uid ? (
                  <>
                    <Button size={"sm"} onClick={deleteComment}>
                      Delete
                    </Button>
                  </>
                ) : null}
              </HStack>
              <Box boxShadow={"lg"} rounded={"md"} bg={bg} color={color} px={5}>
                <Text height="60px" mt={2}>
                  {comment?.message}
                </Text>
              </Box>
            </Box>
          </Flex>
        );
      })}
    </>
  );
};

export default Comments;
