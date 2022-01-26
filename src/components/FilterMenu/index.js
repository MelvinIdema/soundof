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
    H2,
    CheckBox,
} from "./style";

export const FilterMenu = ({}) => {
    const genres = [
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
    const checkedGenres = [];

    const [currentGenres, setCurrentGenres] = useState([]);

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
     * Adds or removes genre to checkedGenres array based on if checkbox is checked or unchecked
     * @param {*} e
     */
    const handleGenre = (e) => {
        if (checkedGenres.includes(e)) {
            let index = checkedGenres.indexOf(e);
            if (index !== -1) {
                checkedGenres.splice(index, 1);
            }
        } else {
            checkedGenres.push(e);
        }
        console.log(checkedGenres);
    };

    const applyFilter = () => {
        setCurrentGenres(checkedGenres);
    };

    return (
        <FilterMenuWrapper>
            <H2>Genres</H2>
            <UnorderedList genres>
                {genres.map((d) => {
                    return (
                        <CheckBox>
                            <input
                                type="checkbox"
                                id={d.name}
                                value={d.name}
                                class="regular-checkbox big-checkbox"
                                onChange={(e) => handleGenre(e.target.value)}
                            />
                            <label
                                for={d.name}
                                style={{ backgroundColor: d.color }}
                            >
                                {d.name}
                            </label>
                        </CheckBox>
                    );
                })}
            </UnorderedList>

            <H2>Emoties</H2>
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

            <Button primary onClick={applyFilter}>
                {" "}
                🔍{" "}
            </Button>
        </FilterMenuWrapper>
    );
};
