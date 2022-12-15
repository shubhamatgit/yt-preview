import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { AuthVal } from "../context/AuthContext";

export default function Dashboard() {
  const [likedVideos, setLikedVideos] = useState([]);

  const islogged = useContext(AuthVal);
  var params = JSON.parse(localStorage.getItem("oauth2-test-params"));
  function getLikedVideos() {
    if (params && params["access_token"]) {
      fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&myRating=like&key=AIzaSyD2ybDrgpApDRqpJh91jTIawOdD0VaTdEg",
        {
          headers: {
            Authorization: "Bearer " + params["access_token"],
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setLikedVideos(data.items);
          console.log(data);
        });
    }
  }
  useEffect(() => {
    getLikedVideos();
  }, []);
  return likedVideos.length != 0 ? (
    <div className="liked-videos-wrapper">
      <h1>Liked Videos</h1>
      <div className="liked-videos">
        {likedVideos.map((item) => {
          return (
            <div key={item.id}>
              <iframe
                style={{ border: "none" }}
                width="300px"
                height="auto"
                src={`https://www.youtube.com/embed/${item.id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>{item.snippet.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    "Loading"
  );
}
