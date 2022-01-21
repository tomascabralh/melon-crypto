import {
  FormControl,
  FormLabel,
  Button,
  Grid,
  GridItem,
  Image,
  Textarea,
  Text,
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
          set(ref(getDatabase(), `comments/${news}`), {
            idCounter: counter,
          });

          set(ref(getDatabase(), `comments/${news}/com/` + counter), {
            userID: currentUser?.uid,
            photoURL: users?.photoURL,
            user: users?.username,
            message: msg,
            date: d.toLocaleString(),
            commentID: counter,
          });
          setMsg("");
        } else {
          update(ref(getDatabase(), `comments/${news}`), {
            idCounter: counter,
          });

          set(ref(getDatabase(), `comments/${news}/com/` + counter), {
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
            ref(getDatabase(), `comments/${news}/com/${commentID}/zreplies/`),
            {
              idCounter: counter,
            }
          );

          set(
            ref(
              getDatabase(),
              `comments/${news}/com/${commentID}/zreplies/com/` +
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
            ref(getDatabase(), `comments/${news}/com/${commentID}/zreplies/`),
            {
              idCounter: counter,
            }
          );

          set(
            ref(
              getDatabase(),
              `comments/${news}/com/${commentID}/zreplies/com/` +
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
      const starCountRef = ref(getDatabase(), `comments/${news}/com`);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data === null) {
          setCounter(0);
        } else {
          const dbref = ref(getDatabase(), `comments/${news}`);
          onValue(dbref, (snapshot) => {
            const idData = snapshot.val();
            setCounter(idData.idCounter + 1);
          });
        }
      });
    } else {
      const starCountRef = ref(
        getDatabase(),
        `comments/${news}/com/${commentID}/zreplies/com/`
      );
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data === null) {
          setCounter(0);
        } else {
          const dbref = ref(
            getDatabase(),
            `comments/${news}/com/${commentID}/zreplies/`
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
      <Grid templateColumns="repeat(10 ,1fr)">
        <GridItem colSpan={2} mx={30}>
          <Image
            src={users?.photoURL}
            alt={users?.uid}
            fallbackSrc={Avatar}
            borderRadius="full"
            boxSize={150}
          />
        </GridItem>
        <GridItem colSpan={7}>
          <FormControl>
            <FormLabel htmlFor="Comment"></FormLabel>
            <Text mb={5}>{users?.username} comments: </Text>
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
