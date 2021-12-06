import React, { useState, useEffect } from "react";
import axios from "axios";

const Articles = ({ fetchDataFromArticles }) => {
  const [articles, setArticles] = useState();
  const [sortBy, setSortBy] = useState("relevancy");

  const APIkey = "pub_26071eee6b6a5e4090ce71f1542844c13119";
  const GETrequest = `https://newsdata.io/api/1/news?apikey=${APIkey}&q=crypto&sortBy=${sortBy}`;

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setArticles(res.data);
    });
  }, []);

  return { articles };
};

export default Articles;
