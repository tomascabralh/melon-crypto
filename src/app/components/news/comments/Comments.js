import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text, HStack, Spacer, Link } from "@chakra-ui/react";
import Avatar from "../../../../images/user/DefaultAvatar.png";
import { useAuth } from "../../contexts/AuthContext";
import { getDatabase, ref, onValue } from "firebase/database";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useParams } from "react-router-dom";
import DeleteComment from "./deleteComment";
import CreateComment from "./CreateComment";
import _ from "lodash";

const Comments = () => {
  const { currentUser } = useAuth();
  const [backendComments, setBackendComments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const { news } = useParams();

  const bg = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("black", "gray.200");

  useEffect(() => {
    const starCountRef = ref(getDatabase(), `news/${news}/com/comments`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setBackendComments(data);
    });
  }, [news]);

  return (
    <>
      {backendComments?.map((comment, index) => {
        return (
          <>
            <Box my={10} key={comment.commentID}>
              <HStack>
                <Image
                  src={comment?.photoURL}
                  alt={comment?.userID}
                  fallbackSrc={Avatar}
                  borderRadius="full"
                  boxSize={{ base: "50px", sm: "70px", md: "100px" }}
                />

                <Box w="100%">
                  <HStack>
                    <Text fontSize="sm">{comment?.date} </Text>
                    <Spacer />
                    {comment?.userID === currentUser?.uid ? (
                      <>
                        <DeleteComment commentID={comment} />
                      </>
                    ) : null}
                  </HStack>
                  <Box
                    boxShadow={"lg"}
                    rounded={"md"}
                    bg={bg}
                    color={color}
                    px={10}
                  >
                    <Text mt={2} fontSize={"lg"} py={2}>
                      {comment?.message}
                    </Text>
                  </Box>
                  <Link
                    fontSize={"xs"}
                    px={2}
                    onClick={() => {
                      setEditIndex((editIndex) =>
                        editIndex === index ? null : index
                      );
                    }}
                  >
                    Reply
                  </Link>
                </Box>
              </HStack>
            </Box>

            {editIndex === index ? (
              <CreateComment commentID={comment.commentID} />
            ) : null}

            {_.toArray(comment.zreplies?.comments).map((reply) => {
              return (
                <>
                  <Box my={10} ml={50} key={reply.commentID}>
                    <HStack>
                      <Image
                        src={reply?.photoURL}
                        alt={reply?.userID}
                        fallbackSrc={Avatar}
                        borderRadius="full"
                        boxSize={{ base: "50px", sm: "70px", md: "100px" }}
                      />

                      <Box w="100%">
                        <HStack>
                          <Text fontSize="sm">{reply?.date} </Text>
                          <Spacer />
                          {reply?.userID === currentUser?.uid ? (
                            <>
                              <DeleteComment commentID={reply} />
                            </>
                          ) : null}
                        </HStack>
                        <Box
                          boxShadow={"lg"}
                          rounded={"md"}
                          bg={bg}
                          color={color}
                          px={10}
                        >
                          <Text mt={2} fontSize={"lg"} py={2}>
                            {reply?.message}
                          </Text>
                        </Box>
                      </Box>
                    </HStack>
                  </Box>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
};

export default Comments;
