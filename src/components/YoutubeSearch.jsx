import React, { useState, useEffect } from "react";
import "../css/TileMenu.css";

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = "AIzaSyBQQhP2Vn44Aun7rBOjoTURrVgBJjVtF6o";

export const YoutubeSearch = ({ props }) => {
    //Youtube API useStates
    const [currentYoutubeKeywords, setCurrentYoutubeKeywords] = useState("");
    const [youtubeVideoData, setYoutubeVideoData] = useState();

    const [youtubeVideoID, setYoutubeVideoID] = useState("");
    const [youtubeTitle, setYoutubeTitle] = useState("");
    const [youtubeThumbnail, setYoutubeThumbnail] = useState("");
    const [youtubeTags, setYoutubeTags] = useState();

    /**
     * Gets the first video from the search results using currentYoutubeKeywords
     */
    async function searchYoutubeWithKeywords() {
        await fetch(
            `${YOUTUBE_API}/search?part=snippet&maxResults=1&q=${currentYoutubeKeywords}&type=video&key=${YOUTUBE_API_KEY}`
        )
            .then((response) => {
                if (response.ok) {
                    //Checks whether the HTTP response is okay
                    return response.json(); //Extract the JSON from the response
                }
                throw new Error("error");
            })
            .then((data) => {
                setYoutubeVideoData(data);
            })
            .catch(() => console.log("Whoops! Something went wrong"));
    }

    /**
     * Gets the video tags using the youtube video ID
     */
    async function getYoutubeTags() {
        await fetch(
            `${YOUTUBE_API}/videos?part=id%2C+snippet&id=${youtubeVideoData.items[0].id.videoId}&key=${YOUTUBE_API_KEY}`
        )
            .then((response) => {
                if (response.ok) {
                    //Checks whether the HTTP response is okay
                    return response.json(); //Extract the JSON from the response
                }
                throw new Error("error");
            })
            .then((data) => {
                setYoutubeTags(data.items[0].snippet.tags);
            })
            .catch(() => console.log("Whoops! Something went wrong"));
    }

    /**
     *
     */
    const getSongData = () => {
        searchYoutubeWithKeywords();
        setYoutubeVideoID(youtubeVideoData.items[0].id.videoId);
        setYoutubeTitle(youtubeVideoData.items[0].snippet.title);
        setYoutubeThumbnail(
            youtubeVideoData.items[0].snippet.thumbnails.high.url
        );

        setCurrentYoutubeKeywords(youtubeTitle);

        getYoutubeTags(youtubeVideoData.items[0].id.videoId);

        console.log("youtube.com/watch?v=" + youtubeVideoID);
        console.log(youtubeTitle);
        console.log(youtubeThumbnail);
        console.log(youtubeTags);
    };

    //TODO compare youtubeTags with genre array

    return (
        <div>
            <img alt={youtubeTitle} src={youtubeThumbnail}></img>
            <div>
                <input
                    type="search"
                    maxlength="140"
                    minlength="3"
                    value={currentYoutubeKeywords}
                    placeholder="Zoek op Youtube naar uw liedje"
                    onChange={(event) => {
                        setCurrentYoutubeKeywords(event.target.value);
                    }}
                ></input>
                <button
                    id="searchYoutube"
                    onClick={() => props.changeWord("txai")}
                >
                    🔍
                </button>
            </div>
        </div>
    );
};

export default YoutubeSearch;
