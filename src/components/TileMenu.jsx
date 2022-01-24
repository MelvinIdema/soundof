import React, { useState, useEffect } from "react";
import "../css/TileMenu.css";

import { YoutubeSearch } from "./YoutubeSearch";

export const TileMenu = ({}) => {
    //useStates
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentStory, setCurrentStory] = useState("");
    const [storyList, setStoryList] = useState([]); //
    const genres = [
        "Kies het genre van uw liedje",
        "Country",
        "Electronisch",
        "Hip-Hop",
        "Jazz",
        "Klassiek",
        "Latin",
        "Metal",
        "Pop",
        "R&B",
        "Rock",
    ];
    const [currentGenre, setCurrentGenre] = useState(genres[0]);

    const emotions = ["angry", "sad", "neutral", "happy", "overjoyed"];
    const [currentEmotion, setCurrentEmotion] = useState(emotions[2]);

    // const sendStory = async () => {
    //     if (currentStory !== "") {
    //         const storyData = {
    //             room: 1,
    //             title: currentTitle,
    //             story: currentStory,
    //             emotion: currentEmotion,
    //             genre: currentGenre,
    //             songLink: currentYoutubeKeywords,
    //             time:
    //                 new Date(Date.now()).getHours() +
    //                 ":" +
    //                 new Date(Date.now()).getMinutes(),
    //         };

    //         await socket.emit("send_story", storyData);
    //         setStoryList((list) => [...list, storyData]);

    //         //Empties inputs
    //         currentTitle("");
    //         setCurrentStory("");
    //     }
    // };

    return (
        <div className="tileMenu">
            <h1>Creëer uw Tile</h1>
            <input
                type="text"
                maxlength="140"
                minlength="3"
                value={currentTitle}
                placeholder="Vul hier de titel in van uw verhaal"
                onChange={(event) => {
                    setCurrentTitle(event.target.value);
                }}
            />
            <textarea
                type="text"
                maxlength="140"
                minlength="3"
                placeholder="Vul hier uw verhaal in"
                onChange={(event) => {
                    setCurrentStory(event.target.value);
                }}
            />

            <ul>
                {emotions.map((d) => {
                    return (
                        <li>
                            <input
                                type="radio"
                                className={d}
                                name="emotion"
                                value={d}
                                checked
                            />
                        </li>
                    );
                })}
            </ul>

            <select>
                {genres.map((d) => {
                    return <option value={d}>{d}</option>;
                })}
            </select>
            <YoutubeSearch />
            <button id="sendButton">Plaats mijn Tile</button>

            <div id="triangle"></div>
        </div>
    );
};
