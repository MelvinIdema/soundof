import React, { useState, useEffect } from "react";
import { Button, TextInput, ResponsiveVideo, iFrame } from "./style";

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = "AIzaSyBQQhP2Vn44Aun7rBOjoTURrVgBJjVtF6o";

export const YoutubeSearch = (props) => {
    //Youtube API useStates
    const [currentYoutubeKeywords, setCurrentYoutubeKeywords] = useState("");
    const [youtubeSearchData, setYoutubeSearchData] = useState();

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
                setYoutubeSearchData(data);
            })
            .catch(() => console.log("Whoops! Something went wrong"));
    }

    /**
     * Gets the video tags using the youtube video ID
     */
    async function getYoutubeTags() {
        await fetch(
            `${YOUTUBE_API}/videos?part=id%2C+snippet&id=${youtubeSearchData.items[0].id.videoId}&key=${YOUTUBE_API_KEY}`
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
    const getSongData = async () => {
        await searchYoutubeWithKeywords();
        setYoutubeVideoID(youtubeSearchData.items[0].id.videoId);
        setYoutubeTitle(youtubeSearchData.items[0].snippet.title);
        setYoutubeThumbnail(
            youtubeSearchData.items[0].snippet.thumbnails.high.url
        );

        await getYoutubeTags(youtubeSearchData.items[0].id.videoId);

        const youtubeVideoData = {
            id: youtubeVideoID,
            title: youtubeTitle,
            thumbnail: youtubeThumbnail,
            tags: youtubeTags,
        };

        props.onMoveData(youtubeVideoData);
    };

    //TODO compare youtubeTags with genre array

    return (
        <div>
            <ResponsiveVideo>
                <iFrame
                    width="500"
                    height="285"
                    src={`https://www.youtube.com/embed/${youtubeVideoID}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </ResponsiveVideo>
            <div>
                <TextInput
                    search
                    maxlength="140"
                    minlength="3"
                    value={currentYoutubeKeywords}
                    placeholder="Zoek op Youtube naar uw liedje"
                    onChange={(event) => {
                        setCurrentYoutubeKeywords(event.target.value);
                    }}
                ></TextInput>
                <Button secondary onClick={getSongData}>
                    🔍
                </Button>
            </div>
        </div>
    );
};

export default YoutubeSearch;
