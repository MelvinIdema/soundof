import React, { useState, useEffect } from "react";
import { YoutubeSearch } from "./YoutubeSearch";
import {
    TileMenuWrapper,
    StepWrapper,
    Button,
    H1,
    P,
    TextArea,
    TextInput,
    RadioButton,
    UnorderedList,
    DropDownMenu,
    Triangle,
} from "./style";

export const TileMenu = ({}) => {
    //useStates
    const [currentTitle, setCurrentTitle] = useState("Titel");
    const [currentStory, setCurrentStory] = useState("");
    const [storyList, setStoryList] = useState([]); //
    const genres = [
        "Welk genre heeft jouw gekozen lied?",
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
    const [currentEmotion, setCurrentEmotion] = useState("");
    const [songData, setSongData] = useState();

    const [menuTitle, setMenuTitle] = useState("Creëer je huisje");
    const [IsStepWrapperHidden, hideStepWrapper] = useState(false);

    /**
     * Gets data from YoutubeSearch component (child) and sends it to TileMenu(parent)
     * @param {*} youtubeVideoData
     */
    const moveData = (youtubeVideoData) => {
        setSongData(youtubeVideoData);
        compareTagsWithGenres(songData);
    };

    /**
     * Compare youtubeTags with genre array
     */
    const compareTagsWithGenres = (songData) => {
        compareArrays(songData.tags, genres);
    };

    /**
     * Compares 2 arrays
     * @param {*} arr1
     * @param {*} arr2
     */
    function compareArrays(arr1, arr2) {
        arr1.forEach((var1) => {
            arr2.forEach((var2) => {
                if (var1.includes(var2)) {
                    setCurrentGenre(var2);
                }
            });
        });
    }

    /**
     * Sets currentEmotion based on selected radio button
     * @param {*} e
     */
    const handleEmotion = (e) => {
        setCurrentEmotion(e.target.value);
    };

    /**
     * Sets currentGenre based on selected option in select
     * @param {*} e
     */
    const handleGenre = (e) => {
        setCurrentGenre(e.target.value);
    };

    /**
     * Sends the story data to the server
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

            setStoryList((list) => [...list, storyData]);
        }
    };

    /**
     * Goes to the next step of creating a house
     */
    const goToNextStep = () => {
        if (
            currentTitle !== "" &&
            currentStory !== "" &&
            currentGenre !== genres[0] &&
            currentEmotion !== ""
        ) {
            setMenuTitle("Kies een ontwerp");
            hideStepWrapper(true);
        }
    };

    return (
        <TileMenuWrapper>
            <H1> {menuTitle} </H1>
            {IsStepWrapperHidden === false && (
                <StepWrapper>
                    <TextInput
                        normal
                        type="text"
                        maxlength="140"
                        minlength="3"
                        placeholder="Vul hier de titel in van je verhaal"
                        onChange={(event) => {
                            setCurrentTitle(event.target.value);
                        }}
                    />
                    <YoutubeSearch onMoveData={moveData} />
                    <DropDownMenu onChange={(e) => handleGenre(e)}>
                        {genres.map((d) => {
                            return (
                                <option
                                    value={d}
                                    selected={currentGenre === d ? true : false}
                                >
                                    {" "}
                                    {d}{" "}
                                </option>
                            );
                        })}
                    </DropDownMenu>
                    <TextArea
                        type="text"
                        maxlength="140"
                        minlength="3"
                        placeholder="Wat betekent dit lied voor jou?"
                        onChange={(event) => {
                            setCurrentStory(event.target.value);
                        }}
                    />
                    <P>Welke emotie wekt dit lied bij jou op?</P>
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
                    <Button secondary onClick={goToNextStep}>
                        Kies een ontwerp
                    </Button>
                </StepWrapper>
            )}
            {IsStepWrapperHidden === true && (
                <StepWrapper>
                    <p>{currentTitle}</p>
                    <p>Genre: {currentGenre}</p>

                    {currentEmotion === emotions[0] && (
                        <RadioButton angry type="radio" />
                    )}
                    {currentEmotion === emotions[1] && (
                        <RadioButton sad type="radio" />
                    )}
                    {currentEmotion === emotions[2] && (
                        <RadioButton neutral type="radio" />
                    )}
                    {currentEmotion === emotions[3] && (
                        <RadioButton happy type="radio" />
                    )}
                    {currentEmotion === emotions[4] && (
                        <RadioButton overjoyed type="radio" />
                    )}

                    <div>
                        <Button secondary>⬅️</Button>
                        <img alt="Huis ontwerp"></img>
                        <Button secondary>➡️</Button>
                    </div>

                    <Button primary onClick={console.log("hallo")}>
                        Plaats je huisje
                    </Button>
                </StepWrapper>
            )}
            <Triangle />
        </TileMenuWrapper>
    );
};
