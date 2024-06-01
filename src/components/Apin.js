import React from "react";
import NewsItem from "./NewsItem";
import { useQuery } from "react-query";

const Apin = () => {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=98b280eeed844f799baa779a9449b87e"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const data = await response.json();

      if (!data.articles) {
        throw new Error("Invalid response data");
      }
      return data.articles;
    },
  });

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }
  return (
    <>
      {articles.map((articles, index) => {
        return (
          <>
            <NewsItem id={index} src={articles.urlToImage} />
          </>
        );
      })}
    </>
  );
};

export default Apin;
