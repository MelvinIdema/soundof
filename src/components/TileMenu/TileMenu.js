import React, { useState, useEffect } from "react";
import { YoutubeSearch } from "./YoutubeSearch";
import {
    TileMenuWrapper,
    StepWrapper,
    Button,
    H1,
    H2,
    P,
    TextArea,
    TextInput,
    RadioButton,
    UnorderedList,
    DropDownMenu,
    DropDownOption,
    Triangle,
    Carousel,
    GenreWrapper,
} from "./style";
import house1_1 from "./assets/huis1.1.png";
import house1_2 from "./assets/huis1.2.png";
import house1_3 from "./assets/huis1.3.png";
import house1_4 from "./assets/huis1.4.png";

export const TileMenu = ({}) => {
    //useStates
    const [currentTitle, setCurrentTitle] = useState("Anoniem");
    const [currentStory, setCurrentStory] = useState("");
    const [storyList, setStoryList] = useState([]); //
    const genres = [
        { name: "Welk genre heeft jouw gekozen lied?", color: "none" },
        { name: "Country", color: "red" },
        { name: "Electronisch", color: "blue" },
        { name: "Hip-Hop", color: "green" },
        { name: "Jazz", color: "yellow" },
        { name: "Klassiek", color: "purple" },
        { name: "Latin", color: "orange" },
        { name: "Metal", color: "black" },
        { name: "Pop", color: "white" },
        { name: "R&B", color: "pink" },
        { name: "Rock", color: "grey" },
    ];
    const [currentGenre, setCurrentGenre] = useState(genres[0]);
    const emotions = ["crying", "sad", "neutral", "happy", "overjoyed"];
    const [currentEmotion, setCurrentEmotion] = useState("");
    const [songData, setSongData] = useState();

    const [menuTitle, setMenuTitle] = useState("Creëer je huisje");
    const [IsStepWrapperHidden, hideStepWrapper] = useState(false);
    const [isAnonymous, setAnonymous] = useState(false);

    const houses = [house1_1, house1_2, house1_3, house1_4];
    const [houseIndex, setHouseIndex] = useState(0);

    /**
     * Gets data from YoutubeSearch component (child) and sends it to TileMenu(parent)
     * @param {*} youtubeVideoData
     */
    const moveData = (youtubeVideoData) => {
        setSongData(youtubeVideoData);
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
                if (var1.includes(var2.name)) {
                    setCurrentGenre(var2.name);
                    console.log(var2.name);
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
     * Goes to the next step of creating a house
     */
    const goToNextStep = () => {
        if (
            currentStory !== "" &&
            currentGenre !== genres[0].name &&
            currentEmotion !== ""
        ) {
            setMenuTitle("Overzicht");
            hideStepWrapper(true);
        }
    };

    /**
     *  Increases or discrease houseIndex based on the arrowButton pressed
     * @param {*} direction
     */
    const browseHouses = (direction) => {
        if (direction === "back" && houseIndex !== 0) {
            setHouseIndex(houseIndex - 1);
        } else if (direction === "forward" && houseIndex < houses.length - 1) {
            setHouseIndex(houseIndex + 1);
        }
        console.log(houseIndex);
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

    return (
        <TileMenuWrapper>
            <H1> {menuTitle} </H1>
            {IsStepWrapperHidden === false && (
                <StepWrapper>
                    {isAnonymous === false && (
                        <TextInput
                            normal
                            type="text"
                            maxlength="140"
                            minlength="3"
                            placeholder="Vul hier jouw naam in (optioneel)"
                            onChange={(event) => {
                                setCurrentTitle(event.target.value);
                            }}
                        />
                    )}
                    <YoutubeSearch onMoveData={moveData} />
                    <DropDownMenu onChange={(e) => handleGenre(e)}>
                        {genres.map((d) => {
                            return (
                                <DropDownOption
                                    value={d.name}
                                    selected={
                                        currentGenre === d.name ? true : false
                                    }
                                >
                                    {d.name}
                                </DropDownOption>
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
                                crying
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
                    <P>{currentTitle}</P>
                    <P></P>
                    <GenreWrapper>
                        <P>Genre: {currentGenre}</P>
                        <svg>
                            <circle
                                cx="15"
                                cy="15"
                                r="15"
                                fill={
                                    genres.find(
                                        (genre) => genre.name === currentGenre
                                    ).color
                                }
                            />
                        </svg>
                    </GenreWrapper>

                    {currentEmotion === emotions[0] && (
                        <RadioButton crying type="radio" />
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
                    <H2>Kies een ontwerp</H2>
                    <Carousel>
                        <Button
                            arrowLeft
                            onClick={() => browseHouses("back")}
                        ></Button>
                        <img src={houses[houseIndex]} alt="Huis keuze" />
                        <Button
                            arrowRight
                            onClick={() => browseHouses("forward")}
                        ></Button>
                    </Carousel>

                    <Button primary>Plaats je huisje</Button>
                </StepWrapper>
            )}
            <Triangle />
        </TileMenuWrapper>
    );
};
