// import "./latest.scss";
// https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=vLVbpyMbdPURogmQJz5HprhlicN7eXZv
import styled from "styled-components";
import React, { useState, useEffect } from "react"

const Latest = () => {

  const [latestNews, setLatestNews ] = useState([])
  const [newsIndex, setNewsIndex] = useState(0);

  const latest = 
    useEffect(async function getNews(){
      await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=vLVbpyMbdPURogmQJz5HprhlicN7eXZv")
      .then(response => response.json())
      .then(newsData => {
        setLatestNews(newsData)
      })}, []);
    
      const filteredLatestData = latestNews.slice(newsIndex, newsIndex+4)

  return (
    <LatestDiv>
      {filteredLatestData.map((news) => {
        return (
          <NewsDiv key={news.id}>
            <img src={news.img} alt="" />
            <ArticleName>{news.name}</ArticleName>
          </NewsDiv>
        );
      })}
    </LatestDiv>
  );
};

const LatestDiv = styled.div`
  display: flex;
  gap: 10px;
  height: 250px;
  margin-bottom: 30px;
  background-color: black;
  padding: 10px;
`;

const NewsDiv = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ArticleName = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-weight: 500;
`;

export default Latest;
