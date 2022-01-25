import React, { useState, useEffect } from "react";
import {
    FilterMenuWrapper,
    Button,
    H1,
    TextInput,
    RadioButton,
    UnorderedList,
    DropDownMenu,
    DropDownOption,
} from "./style";

export const FilterMenu = ({}) => {
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
    const [currentGenre, setCurrentGenre] = useState(genres[0]);
    const emotions = ["crying", "sad", "neutral", "happy", "overjoyed"];
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
            <H1> Filter </H1>
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
            <DropDownMenu onChange={(e) => handleGenre(e)}>
                {genres.map((d) => {
                    return (
                        <DropDownOption value={d.name}>{d.name}</DropDownOption>
                    );
                })}
            </DropDownMenu>
            <Button primary> 🔍 </Button>
        </FilterMenuWrapper>
    );
};
