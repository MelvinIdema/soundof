import React, { useState, useEffect } from "react";
import { Button, TextInput, ResponsiveVideo, iFrame } from "./style";

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = "AIzaSyBWSxRuR9QB3Sk49NRrt_UAs9gpvqsaWbw";

export const YoutubeSearch = (props) => {
    //Youtube API useStates
    const [currentYoutubeKeywords, setCurrentYoutubeKeywords] = useState("");
    const [youtubeSearchData, setYoutubeSearchData] = useState();

    const [youtubeVideoID, setYoutubeVideoID] = useState("");
    const [youtubeTitle, setYoutubeTitle] = useState("");
    const [youtubeThumbnail, setYoutubeThumbnail] = useState("");
    const [youtubeTags, setYoutubeTags] = useState();

    const [isSongError, setSongError] = useState(false);

    const errorStyleInput = {
        outline: "3px solid red",
    };

    /**
     * Gets the first video from the search results using currentYoutubeKeywords
     */
    async function searchYoutubeWithKeywords() {
        try {
            const response = await fetch(
                `${YOUTUBE_API}/search?part=snippet&maxResults=1&q=${currentYoutubeKeywords}&type=video&key=${YOUTUBE_API_KEY}`
            );
            const data = await response.json();
            setYoutubeSearchData(data);
        } catch (err) {
            console.error(
                "An error occured in searchYoutubeWithKeywords: ",
                err
            );
        }
    }

    /**
     * Gets the video tags using the youtube video ID
     */
    async function getYoutubeTags() {
        try {
            const response = await fetch(
                `${YOUTUBE_API}/videos?part=id%2C+snippet&id=${youtubeSearchData.items[0].id.videoId}&key=${YOUTUBE_API_KEY}`
            );
            const data = await response.json();
            setYoutubeTags(data.items[0].snippet.tags);
        } catch (err) {
            console.error(
                "An error occured in searchYoutubeWithKeywords: ",
                err
            );
        }
    }

    /**
     *
     */
    const getSongData = async (currentYoutubeKeywords) => {
        await searchYoutubeWithKeywords(currentYoutubeKeywords);

        setYoutubeVideoID(youtubeSearchData.items[0].id.videoId);
        setYoutubeTitle(youtubeSearchData.items[0].snippet.title);
        setYoutubeThumbnail(
            youtubeSearchData.items[0].snippet.thumbnails.high.url
        );
        console.log(youtubeVideoID);
        console.log(youtubeTitle);
        console.log(youtubeThumbnail);

        await getYoutubeTags(youtubeSearchData.items[0].id.videoId);
        console.log(youtubeTags);

        const youtubeVideoData = {
            id: youtubeVideoID,
            title: youtubeTitle,
            thumbnail: youtubeThumbnail,
            tags: youtubeTags,
        };

        props.onMoveData(youtubeVideoData);
    };

    return (
        <div>
            <div>
                <TextInput
                    search
                    maxlength="140"
                    minlength="3"
                    value={currentYoutubeKeywords}
                    placeholder="Zoek het lied dat een betekenis heeft voor jou"
                    onChange={(event) => {
                        setCurrentYoutubeKeywords(event.target.value);
                    }}
                    style={isSongError === true ? errorStyleInput : null}
                ></TextInput>{" "}
                <Button search onClick={getSongData}>
                    {" "}
                    🔍{" "}
                </Button>{" "}
            </div>{" "}
            <ResponsiveVideo>
                <iFrame
                    width="520"
                    height="296"
                    src={`https://www.youtube.com/embed/${youtubeVideoID}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </ResponsiveVideo>{" "}
        </div>
    );
};

export default YoutubeSearch;
