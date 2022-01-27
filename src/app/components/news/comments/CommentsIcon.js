import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiCommentDetail } from "react-icons/bi";

const CommentsIcon = ({ article }) => {
  return (
    <HStack>
      <Text fontSize={"sm"}>
        {article.com?.idCounter ? parseInt(article.com.idCounter) + 1 : "0"}
      </Text>
      <Icon as={BiCommentDetail} />
    </HStack>
  );
};

export default CommentsIcon;
