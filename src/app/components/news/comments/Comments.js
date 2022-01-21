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
    const starCountRef = ref(getDatabase(), `comments/${news}/com`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setBackendComments(data);
    });
  }, [news]);

  return (
    <>
      {backendComments?.map((comment, index) => {
        return (
          <>
            <Flex my={10} key={comment.commentID}>
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
                  px={4}
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

                {editIndex === index ? (
                  <CreateComment commentID={comment.commentID} />
                ) : null}

                {_.toArray(comment.zreplies?.com).map((reply) => {
                  return (
                    <>
                      <Flex my={10} key={reply.commentID}>
                        <Box>
                          <Image
                            src={reply?.photoURL}
                            alt={reply?.userID}
                            fallbackSrc={Avatar}
                            borderRadius="full"
                            boxSize="100px"
                          />
                        </Box>
                        <Box w="100%" pl={10}>
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
                            px={4}
                          >
                            <Text mt={2} fontSize={"lg"} py={2}>
                              {reply?.message}
                            </Text>
                          </Box>
                        </Box>
                      </Flex>
                    </>
                  );
                })}
              </Box>
            </Flex>
          </>
        );
      })}
    </>
  );
};

export default Comments;
