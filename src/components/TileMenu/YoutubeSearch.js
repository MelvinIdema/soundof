import React, { useState } from "react";
import { Button, Iframe, ResponsiveVideo, TextInput, SongSearch } from "./style";

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = process.env.REACT_APP_YT_KEY;

export const YoutubeSearch = (props) => {
    //Youtube API useStates
    const [currentYoutubeKeywords, setCurrentYoutubeKeywords] = useState("");
    const [youtubeVideoID, setYoutubeVideoID] = useState(null);
    const [isSongError, setSongError] = useState(false);

    const errorStyleInput = {
        outline: "3px solid red",
    };

    /**
     * Gets the first video from the search results using currentYoutubeKeywords
     */
    async function searchYoutubeWithKeywords() {
        try {
            const response = await fetch(`${YOUTUBE_API}/search?part=snippet&maxResults=1&q=${currentYoutubeKeywords}&type=video&key=${YOUTUBE_API_KEY}`);
            return await response.json();
        } catch(err) {
            return console.error("An error occured in searchYoutubeWithKeywords: ", err);
        }
    }

    /**
     * Gets the video tags using the youtube video ID
     */
    async function getYoutubeTags(videoId) {
        try {
            const response = await fetch(`${YOUTUBE_API}/videos?part=id%2C+snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`);
            const data = await response.json();
            return data.items[0].snippet.tags;
        } catch(err) {
            return console.error("An error occured in getYoutubeTags: ", err);
        }
    }

    /**
     *
     */
    const getSongData = async () => {
        const youtubeSearchData = await searchYoutubeWithKeywords();
        const youtubeVideoID = youtubeSearchData.items[0].id.videoId;
        setYoutubeVideoID(youtubeVideoID);
        const youtubeTitle = youtubeSearchData.items[0].snippet.title;
        const youtubeThumbnail = youtubeSearchData.items[0].snippet.thumbnails.high.url;

        const youtubeTags = await getYoutubeTags(youtubeVideoID);

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
            <SongSearch>
                <TextInput
                    search
                    maxlength="140"
                    minlength="3"
                    value={currentYoutubeKeywords}
                    placeholder="Zoek het lied dat een betekenis heeft voor jou"
                    onChange={event => setCurrentYoutubeKeywords(event.target.value)}
                    style={isSongError === true ? errorStyleInput : null}
                />
                <Button search onClick={getSongData}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" height="21px" width="21px">
                        <path fill="currentColor" d="M32.5 30c2.494-3.129 4-7.654 4-12 0-10.05-8.139-18-18-18C8.638 0 .5 7.95.5 18s8.138 18 18 18c4.193 0 7.953-1.534 11-4l11 12 3-3-11-11zm-14 2c-7.658 0-14-6.196-14-14s6.342-14 14-14 14 6.196 14 14-6.342 14-14 14z"/>
                    </svg>
                </Button>
            </SongSearch>
            <ResponsiveVideo>
                <Iframe
                    width="520"
                    height="296"
                    src={`https://www.youtube.com/embed/${youtubeVideoID}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title="Embedded youtube"
                />
            </ResponsiveVideo>
        </div>
    );
};

export default YoutubeSearch;
