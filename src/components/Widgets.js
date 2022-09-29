import React, { useState, useEffect, memo } from "react";
import "../css/Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Collapsible from "react-collapsible";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Info from "./Info";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Widgets() {
  const [isOpened, setIsOpened] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios(
        "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=YBVkRdqAcP3SBEZaEj7H9UnBJHaiC8sf"
      );
      const data = res.data;
      const top6News = data.results;
      top6News.length = 6;
      setNews(
        top6News.map((topNews) => {
          return { ...topNews, readers: generateNum() };
        })
      );
    }
    fetchData();
  }, []);

  const showMore = (
    <div className="shownews-button">
      <span>Show More </span>
      <KeyboardArrowDownIcon />
    </div>
  );

  const showLess = (
    <div className="shownews-button">
      <span>Show Less </span>
      <KeyboardArrowUpIcon />
    </div>
  );
  const newsArticle = (heading, subtitle, link, id) => (
    <div className="widgets-article" key={id}>
      <div className="widgets-articleLeft">
        <FiberManualRecordIcon />
      </div>

      <a href={link} className="widgets-articleRight" target="_blank">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </a>
    </div>
  );

  function convertMsToHM(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = seconds >= 30 ? minutes + 1 : minutes;
    minutes = minutes % 60;
    hours = hours % 24;
    return `${hours ? `${hours}h ` : ""}${minutes ? `${minutes}m ` : ""}ago`;
  }

  function calcTime(publishedTime) {
    const currentDate = new Date();
    const postDate = new Date(publishedTime);
    const timeDifference = currentDate.valueOf() - postDate.valueOf();
    return convertMsToHM(timeDifference);
  }

  function generateNum() {
    const num = Math.floor(Math.random() * 40001) + 10000;
    let numStr = num.toString();
    numStr = numStr.slice(0, 2) + "," + numStr.slice(2);
    return numStr;
  }

  return (
    <div className="widgets">
      <div className="widgets-top">
        <div className="widgets-header">
          <h2>LinkedIn News</h2>

          <InfoIcon
            className="info-button"
            onClick={() => setIsClicked(!isClicked)}
          />
          {isClicked && <Info close={setIsClicked} />}
        </div>

        {news
          .slice(0, -3)
          .map((article) =>
            newsArticle(
              article.title,
              `${calcTime(article.updated_date)} · ${article.readers} readers`,
              article.url,
              uuidv4()
            )
          )}

        <Collapsible
          trigger={isOpened ? showLess : showMore}
          onOpen={() => setIsOpened(true)}
          onClose={() => setIsOpened(false)}
          transitionTime={300}
        >
          {news
            .slice(3)
            .map((article) =>
              newsArticle(
                article.title,
                `${calcTime(article.updated_date)} · ${
                  article.readers
                } readers`,
                article.url,
                uuidv4()
              )
            )}
        </Collapsible>
      </div>

      <div className="widgets-bottom">
        <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" />
        <span>LinkedIn Corporation © 2022</span>
      </div>
    </div>
  );
}

export default memo(Widgets);
