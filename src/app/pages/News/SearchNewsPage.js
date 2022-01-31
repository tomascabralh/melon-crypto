import React from "react";
import { useParams } from "react-router-dom";
import Articles from "../../components/news/HArticles";

const SearchNewsPage = () => {
  const { query } = useParams();
  return (
    <>
      <Articles q={query} searchT={"qInTitle"} />
    </>
  );
};

export default SearchNewsPage;
