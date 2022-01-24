import React, { useState, useEffect } from "react";
import {
    FilterMenuWrapper,
    Button,
    H1,
    TextInput,
    RadioButton,
    UnorderedList,
    DropDownMenu,
} from "./style";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

export const FilterMenu = ({}) => {
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

    return (
        <FilterMenuWrapper>
            <h1> Filter </h1>
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
            <Button primary> 🔍 </Button>
        </FilterMenuWrapper>
    );
};
