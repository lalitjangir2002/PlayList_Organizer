import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { Comments, Description, Notes } from "./VideoContent";

export const VideoPlayer = () => {
  const { id, name } = useParams();
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({
    snippet: {
      description: "",
      resourceId: {
        videoId: ""
      }
    }
  });
  const [currentOpt, setCurrentOpt] = useState("Description");
  const playerRef = useRef(null);

  useEffect(() => {
    const fetchPlaylistItems = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/playlistItems",
        params: {
          playlistId: id,
          part: "snippet",
          maxResults: "50",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setVideos(response.data.items);
        setCurrentVideo(response.data.items[0]);
      } catch (error) {
        console.error("Error fetching playlist items:", error);
      }
    };

    fetchPlaylistItems();
  }, [id]);

  return (
    <>
      <Header nav={false} courseTitle={name} />
      <div className="flex flex-row justify-between">
        <div className="w-8/12">
          <ReactPlayer
            ref={playerRef}
            width="100%"
            height={500}
            url={`https://www.youtube.com/watch?v=${currentVideo.snippet?.resourceId?.videoId}`}
            controls
            pip={true}
          />

          <div className="flex flex-row gap-8 pl-10 py-4 font-semibold text-xl text-[#fff]">
            {["Description", "Notes", "Comments"].map((option, idx) => (
              <button
                className={`${
                  currentOpt === option ? "text-dark font-bold" : ""
                }`}
                onClick={() => setCurrentOpt(option)}
                key={idx}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="w-fit px-10 pb-8">
            {currentOpt === "Description" && (
              <Description description={currentVideo.snippet?.description} />
            )}
            {currentOpt === "Notes" && (
              <Notes title={currentVideo.snippet?.title} player={playerRef} />
            )}
            {currentOpt === "Comments" && (
              <Comments videoId={currentVideo.snippet?.resourceId?.videoId} />
            )}
          </div>
        </div>
        <div className="w-4/12">
          <h1 className="text-xl font-bold pl-10 py-4 bg-[#91a380] text-[#ffffff]">
            Course Content
          </h1>
          <hr />
          <div className="overflow-scroll h-screen w-full">
            {videos.map((video, index) => (
              <div
                className={`px-6 py-2 hover:bg-light cursor-pointer border-b-2 ${
                  currentVideo === video ? "bg-active" : ""
                }`}
                onClick={() => setCurrentVideo(video)}
                key={index}
              >
                <p className="font-semibold text-white">
                  <span className="font-bold text-white">{index + 1}.</span>{" "}
                  {video.snippet.title}
                </p>
                <p className="pl-4 text-sm text-white">5 min</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
