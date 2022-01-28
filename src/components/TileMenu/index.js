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
    Carousel,
    GenreWrapper,
    EmotionWrapper,
    Grid
} from "./style";
import house1 from "./assets/TILE_HOUSE_11.1.1.png";
import house2 from "./assets/TILE_HOUSE_2.png";
import house3 from "./assets/TILE_HOUSE_31.png";
import house4 from "./assets/TILE_HOUSE_4.png";

export default ({
    currentTitle,
    onCurrentTitleChange,
    currentStory,
    onCurrentStoryChange,
    currentGenre,
    onCurrentGenreChange,
    currentEmotion,
    onCurrentEmotionChange,
    songData,
    onSongDataChange,
    houseVariant,
    onHouseVariantChange,
    onSubmit
    }) => {
    //useStates
    const [storyList, setStoryList] = useState([]);

    const genres = [
        { name: "Welk genre heeft jouw gekozen lied?", color: "none" },
        { name: "Alternative", color: "#c43c86" },
        { name: "Electronisch", color: "#f18382" },
        { name: "Hip-Hop", color: "#664a84" },
        { name: "Jazz", color: "#e9bc67" },
        { name: "K-Pop", color: "#426b87" },
        { name: "Klassiek", color: "#62b5d5" },
        { name: "Latin", color: "#fb985d" },
        { name: "Pop", color: "#069383" },
        { name: "R&B", color: "#6a1944" },
        { name: "Rock", color: "#a71522" },
        { name: "Volksmuziek", color: "#cb5225" },
    ];

    const emotions = ["crying", "sad", "neutral", "happy", "overjoyed"];

    //Styling use states
    const [menuTitle, setMenuTitle] = useState("Creëer je huisje");
    const [IsStepWrapperHidden, hideStepWrapper] = useState(false);
    const [isAnonymous, setAnonymous] = useState(false);

    //House use states
    const houses = [house1, house2, house3, house4];
    const [houseIndex, setHouseIndex] = useState(0);

    //Error use states
    const [isGenreError, setGenreError] = useState(false);
    const [isEmotionError, setEmotionError] = useState(false);
    const [isStoryError, setStoryError] = useState(false);

    const errorStyleInput = { outline: "3px solid red" };
    const errorStyleRadio = { outline: "3px solid red", borderRadius: "100%" };

    /**
     * Gets data from YoutubeSearch component (child) and sends it to TileMenu(parent)
     * @param {*} youtubeVideoData
     */
    const moveData = (youtubeVideoData) => {
        onSongDataChange(youtubeVideoData);
        compareArrays(youtubeVideoData.tags, genres);
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
                    onCurrentGenreChange(var2.name);
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
        onCurrentEmotionChange(e.target.value);
        setEmotionError(false);
    };

    /**
     * Sets currentGenre based on selected option in select
     * @param {*} e
     */
    const handleGenre = (e) => {
        onCurrentGenreChange(e.target.value);
        setGenreError(false);
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
        } else {
            //Sets error states
            if (currentStory === "" || currentStory === null) {
                setStoryError(true);
            } else {
                setStoryError(false);
            }
            if (currentGenre === genres[0].name) {
                setGenreError(true);
            } else {
                setGenreError(false);
            }
            if (currentEmotion === "") {
                console.log("yo");
                setEmotionError(true);
            } else {
                console.log("bye");
                setEmotionError(false);
            }
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
    };

    useEffect(() => {
        switch(houseIndex) {
            case 0:
                onHouseVariantChange("TILE_HOUSE_1");
                break;
            case 1:
                onHouseVariantChange("TILE_HOUSE_2");
                break;
            case 2:
                onHouseVariantChange("TILE_HOUSE_3");
                break
            case 3:
                onHouseVariantChange("TILE_HOUSE_4");
                break;
        }
    }, [houseIndex])

    /**
     * Sends the story data to the server
     */
    const sendStory = async () => {
        if (currentStory !== "") {
            const storyData = {
                author: currentTitle,
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
                    <Grid col={2}>
                        {isAnonymous === false && (
                            <TextInput
                                normal
                                type="text"
                                maxlength="140"
                                minlength="0"
                                placeholder="Vul hier jouw naam in (optioneel)"
                                value={currentTitle}
                                onChange={(event) => {
                                    onCurrentTitleChange(event.target.value);
                                }}
                            />
                        )}
                        <DropDownMenu
                            onChange={(e) => handleGenre(e)}
                            value={currentGenre}
                            style={isGenreError === true ? errorStyleInput : null}
                        >
                            {genres.map((d) => {
                                return <DropDownOption value={ d.name } key={d.name}>{ d.name }</DropDownOption>;
                            })}
                        </DropDownMenu>
                    </Grid>
                    <YoutubeSearch onMoveData={moveData} />
                    <TextArea
                        required
                        type="text"
                        maxlength="280"
                        minlength="3"
                        placeholder="Wat betekent dit lied voor jou?"
                        value={currentStory}
                        onChange={(event) => {
                            onCurrentStoryChange(event.target.value);
                            setStoryError(false);
                        }}
                        style={isStoryError === true ? errorStyleInput : null}
                    />
                    <P> Welke emotie wekt dit lied bij jou op ? </P>
                    <UnorderedList>
                        <li>
                            <RadioButton
                                crying
                                type="radio"
                                name="emotion"
                                value={emotions[0]}
                                onChange={handleEmotion}
                                style={
                                    isEmotionError === true
                                        ? errorStyleRadio
                                        : null
                                }
                            />
                            <RadioButton
                                sad
                                type="radio"
                                name="emotion"
                                value={emotions[1]}
                                onChange={handleEmotion}
                                style={
                                    isEmotionError === true
                                        ? errorStyleRadio
                                        : null
                                }
                            />
                            <RadioButton
                                neutral
                                type="radio"
                                name="emotion"
                                value={emotions[2]}
                                onChange={handleEmotion}
                                style={
                                    isEmotionError === true
                                        ? errorStyleRadio
                                        : null
                                }
                            />
                            <RadioButton
                                happy
                                type="radio"
                                name="emotion"
                                value={emotions[3]}
                                onChange={handleEmotion}
                                style={
                                    isEmotionError === true
                                        ? errorStyleRadio
                                        : null
                                }
                            />
                            <RadioButton
                                overjoyed
                                type="radio"
                                name="emotion"
                                value={emotions[4]}
                                onChange={handleEmotion}
                                style={
                                    isEmotionError === true
                                        ? errorStyleRadio
                                        : null
                                }
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
                    <P var2> {currentTitle} </P> <P var2> </P>
                    <P var2> {songData.title} </P> <br/>
                    <GenreWrapper>
                        <P var2> Genre: {currentGenre} </P>
                        <svg>
                            <circle
                                cx="16"
                                cy="16"
                                r="15"
                                stroke="#fff"
                                strokeWidth="2"
                                fill={genres.find((genre) => genre.name === currentGenre).color}
                            />
                        </svg>
                    </GenreWrapper>
                    <EmotionWrapper>
                        Emotie:
                        {currentEmotion === emotions[0] && (
                            <RadioButton crying type="radio" disabled />
                        )}
                        {currentEmotion === emotions[1] && (
                            <RadioButton sad type="radio" disabled />
                        )}
                        {currentEmotion === emotions[2] && (
                            <RadioButton neutral type="radio" disabled />
                        )}
                        {currentEmotion === emotions[3] && (
                            <RadioButton happy type="radio" disabled />
                        )}
                        {currentEmotion === emotions[4] && (
                            <RadioButton overjoyed type="radio" disabled />
                        )}
                    </EmotionWrapper>
                    <H2> Kies een ontwerp </H2>
                    <Carousel>
                        <Button
                            arrowLeft
                            onClick={() => browseHouses("back")}
                        />
                        <img src={houses[houseIndex]} alt="Huis keuze" />
                        <Button
                            arrowRight
                            onClick={() => browseHouses("forward")}
                        />
                    </Carousel>
                    <Button onClick={onSubmit} primary> Plaats je huisje </Button>
                </StepWrapper>
            )}
        </TileMenuWrapper>
    );
};
