import React, { useState } from "react";
import { Button, Iframe, ResponsiveVideo, TextInput } from "./style";

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
            <div>
                <TextInput
                    search
                    maxlength="140"
                    minlength="3"
                    value={currentYoutubeKeywords}
                    placeholder="Zoek het lied dat een betekenis heeft voor jou"
                    onChange={event => setCurrentYoutubeKeywords(event.target.value)}
                    style={isSongError === true ? errorStyleInput : null}
                />
                <Button search onClick={getSongData}>🔍</Button>
            </div>
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
