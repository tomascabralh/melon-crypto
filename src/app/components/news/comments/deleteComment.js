import React, { useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  Button,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
} from "@chakra-ui/react";
import { getDatabase, ref, remove } from "firebase/database";
import { useParams } from "react-router-dom";

const DeleteComment = ({ commentID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const { news } = useParams();

  const [Comment, setComment] = useState();

  function deleteCom() {
    if (Comment.commentID.includes("-") === false) {
      remove(ref(getDatabase(), `comments/${news}/com/` + Comment?.commentID));
    } else {
      var parentID = Comment.commentID.split("-");
      remove(
        ref(
          getDatabase(),
          `comments/${news}/com/${parentID[0]}/zreplies/com/` +
            `${Comment?.commentID}`
        )
      );
    }
  }

  useEffect(() => {
    setComment(commentID);
  }, [commentID]);
  return (
    <>
      <Button colorScheme="red" onClick={() => setIsOpen(true)} size={"xs"}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Comment
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteCom} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
export default DeleteComment;
