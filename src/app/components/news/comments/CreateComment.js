import {
  FormControl,
  FormLabel,
  Button,
  Image,
  Textarea,
  Text,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import Avatar from "../../../../images/user/DefaultAvatar.png";
import { useParams } from "react-router-dom";

const CreateComment = ({ commentID }) => {
  const { currentUser, users } = useAuth();

  const { news } = useParams();

  const [msg, setMsg] = useState();
  const [counter, setCounter] = useState();

  const submitComment = () => {
    var d = new Date();

    if (msg === undefined || msg === "") {
    } else {
      if (commentID === undefined) {
        if (counter === 0) {
          set(ref(getDatabase(), `news/${news}/com`), {
            idCounter: counter,
          });

          set(ref(getDatabase(), `news/${news}/com/comments/` + counter), {
            userID: currentUser?.uid,
            photoURL: users?.photoURL,
            user: users?.username,
            message: msg,
            date: d.toLocaleString(),
            commentID: counter,
          });
          setMsg("");
        } else {
          update(ref(getDatabase(), `news/${news}/com`), {
            idCounter: counter,
          });

          set(ref(getDatabase(), `news/${news}/com/comments/` + counter), {
            userID: currentUser?.uid,
            photoURL: users?.photoURL,
            user: users?.username,
            message: msg,
            date: d.toLocaleString(),
            commentID: counter,
          });
          setMsg("");
        }
      } else {
        if (counter === 0) {
          set(
            ref(
              getDatabase(),
              `news/${news}/com/comments/${commentID}/zreplies/`
            ),
            {
              idCounter: counter,
            }
          );

          set(
            ref(
              getDatabase(),
              `news/${news}/com/comments/${commentID}/zreplies/comments/` +
                `${commentID}-${counter}`
            ),
            {
              userID: currentUser?.uid,
              photoURL: users?.photoURL,
              user: users?.username,
              message: msg,
              date: d.toLocaleString(),
              commentID: `${commentID}-${counter}`,
            }
          );
          setMsg("");
        } else {
          update(
            ref(
              getDatabase(),
              `news/${news}/com/comments/${commentID}/zreplies/`
            ),
            {
              idCounter: counter,
            }
          );

          set(
            ref(
              getDatabase(),
              `news/${news}/com/comments/${commentID}/zreplies/comments/` +
                `${commentID}-${counter}`
            ),
            {
              userID: currentUser?.uid,
              photoURL: users?.photoURL,
              user: users?.username,
              message: msg,
              date: d.toLocaleString(),
              commentID: `${commentID}-${counter}`,
            }
          );
          setMsg("");
        }
      }
    }
  };

  useEffect(() => {
    if (commentID === undefined) {
      const starCountRef = ref(getDatabase(), `news/${news}/com/comments`);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data === null) {
          setCounter(0);
        } else {
          const dbref = ref(getDatabase(), `news/${news}/com`);
          onValue(dbref, (snapshot) => {
            const idData = snapshot.val();
            setCounter(idData.idCounter + 1);
          });
        }
      });
    } else {
      const starCountRef = ref(
        getDatabase(),
        `news/${news}/com/comments/${commentID}/zreplies/comments/`
      );
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data === null) {
          setCounter(0);
        } else {
          const dbref = ref(
            getDatabase(),
            `news/${news}/com/comments/${commentID}/zreplies/`
          );
          onValue(dbref, (snapshot) => {
            const idData = snapshot.val();
            setCounter(idData.idCounter + 1);
          });
        }
      });
    }
  }, [commentID, news]);

  return (
    <>
      <HStack>
        <Image
          src={users?.photoURL}
          alt={users?.uid}
          fallbackSrc={Avatar}
          borderRadius="full"
          boxSize={{ base: "100px", sm: "120px", md: "150px" }}
        />

        <FormControl>
          <FormLabel htmlFor="Comment"></FormLabel>
          <HStack>
            <Text mb={5}>{users?.username} comments: </Text>
            <Spacer />
            <Button
              colorScheme="teal"
              w="70px"
              h="30px"
              type="submit"
              onClick={submitComment}
            >
              Submit
            </Button>
          </HStack>
          <Textarea
            id="comment"
            placeholder="Comment here"
            value={msg}
            size={"lg"}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
        </FormControl>
      </HStack>
    </>
  );
};

export default CreateComment;
