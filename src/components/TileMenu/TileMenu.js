import React, { useState, useEffect } from "react";
import { YoutubeSearch } from "./YoutubeSearch";
import {
    TileMenuWrapper,
    Button,
    H1,
    TextArea,
    TextInput,
    RadioButton,
    UnorderedList,
    DropDownMenu,
    Triangle,
} from "./style";

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
    const [songData, setSongData] = useState();

    /**
     * Gets data from YoutubeSearch component (child) and sends it to TileMenu(parent)
     * @param {*} youtubeVideoData
     */
    const moveData = (youtubeVideoData) => {
        setSongData(youtubeVideoData);
        console.log(songData);
    };

    /**
     * Sets currentEmotion based on selected radio button
     * @param {*} e
     */
    const handleEmotion = (e) => {
        setCurrentEmotion(e.target.className);
    };

    /**
     * Sets currentGenre based on selected option in select
     * @param {*} e
     */
    const handleGenre = (e) => {
        setCurrentGenre(e.target.value);
    };

    /**
     * Sends the story data to the websocket server
     */
    const sendStory = async () => {
        if (currentStory !== "") {
            const storyData = {
                room: 1,
                title: currentTitle,
                story: currentStory,
                emotion: currentEmotion,
                genre: currentGenre,
                songData: songData,
                time:
                    new Date(Date.now()).getUTCDate() +
                    "-" +
                    (new Date(Date.now()).getMonth() + 1) +
                    "-" +
                    new Date(Date.now()).getFullYear() +
                    " " +
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            console.log(storyData);

            // await socket.emit("send_story", storyData);
            setStoryList((list) => [...list, storyData]);
        }
    };

    return (
        <TileMenuWrapper>
            <H1> Creëer uw Huisje </H1>{" "}
            <TextInput
                normal
                type="text"
                maxlength="140"
                minlength="3"
                value={currentTitle}
                placeholder="Vul hier de titel in van uw verhaal"
                onChange={(event) => {
                    setCurrentTitle(event.target.value);
                }}
            />{" "}
            <TextArea
                type="text"
                maxlength="140"
                minlength="3"
                placeholder="Vul hier uw verhaal in"
                onChange={(event) => {
                    setCurrentStory(event.target.value);
                }}
            />
            <UnorderedList>
                <li>
                    <RadioButton
                        angry
                        type="radio"
                        name="emotion"
                        value={emotions[0]}
                        onChange={handleEmotion}
                    />
                    <RadioButton
                        sad
                        type="radio"
                        name="emotion"
                        value={emotions[1]}
                        onChange={handleEmotion}
                    />
                    <RadioButton
                        neutral
                        type="radio"
                        name="emotion"
                        value={emotions[2]}
                        onChange={handleEmotion}
                    />
                    <RadioButton
                        happy
                        type="radio"
                        name="emotion"
                        value={emotions[3]}
                        onChange={handleEmotion}
                    />
                    <RadioButton
                        overjoyed
                        type="radio"
                        name="emotion"
                        value={emotions[4]}
                        onChange={handleEmotion}
                    />
                </li>
            </UnorderedList>
            <DropDownMenu onChange={(e) => handleGenre(e)}>
                {genres.map((d) => {
                    return <option value={d}> {d} </option>;
                })}
            </DropDownMenu>
            <YoutubeSearch onMoveData={moveData} />
            <Button primary onClick={sendStory}>
                Plaats mijn Huisje
            </Button>
            <Triangle />
        </TileMenuWrapper>
    );
};
