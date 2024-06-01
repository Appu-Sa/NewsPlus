import React from "react";
import Carousel from "./carousel";
import NewsItem from "./NewsItem.js";
import { useQuery } from "react-query";

const Api = ({ cat,country}) => {
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=98b280eeed844f799baa779a9449b87e`;
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles", cat,country],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch articles reached api 24hrs limit");
      }

      const data = await response.json();

      if (!data.articles) {
        throw new Error("Invalid response data");
      }
      return data.articles;
    },
  });

  if (isLoading) {
    return (
      <>
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }
  return (
    <>
      <Carousel articles={articles} />
      <div className=" mt-3 mb-3">
        <h2 className="text-center">
          Latest <span className="badge bg-danger">News</span>
        </h2>
      </div>
      {articles.map((articles, index) => {
        return (
          <>
            <NewsItem
              id={index}
              src={articles.urlToImage}
              title={articles.title}
              desp={articles.description}
              url={articles.url}
            />
          </>
        );
      })}
    </>
  );
};

export default Api;
