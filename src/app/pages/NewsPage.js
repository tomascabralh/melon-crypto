import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Item from "../components/Item";

const NewsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Box>
      {data.map((item) => (
        <Box py={4}>
          <Item {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default NewsPage;
