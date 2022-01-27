import React from "react";
import { useState, useEffect, useRef } from "react";
import {
    FilterWrapper,
    H1,
    H2,
    UnorderedList,
    SpecialInput,
    Button,
    Hr,
    FilterTitle,
    Emoji,
    RadioButton,
} from "./style";

import Crying from "./assets/crying.svg";
import Sad from "./assets/sad.svg";
import Neutral from "./assets/neutral.svg";
import Happy from "./assets/happy.svg";
import Overjoyed from "./assets/overjoyed.svg";

export default function FilterMenu(queriedTiles) {
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

    const emotions = ["overjoyed", "happy", "neutral", "sad", "crying"];

    const [currentGenre, setCurrentGenre] = useState("");
    const [currentEmotion, setCurrentEmotion] = useState("");
    const [isFilterShown, showFilter] = useState(false);

    /**
     * Sets currentGenre based on selected option in select
     * @param {*} e
     */
    const handleGenre = (e) => {
        setCurrentGenre(e.target.value);
    };

    /**
     * Sets currentEmotion based on selected option in select
     * @param {*} e
     */
    const handleEmotion = (e) => {
        setCurrentEmotion(e.target.value);
    };

    //IF queriedTiles === query... filter

    /**
     * Sets currentGenre based on selected option in select
     * @param {*} e
     */
    const handleFilter = () => {
        console.log(currentEmotion);
        console.log(currentGenre);
    };

    return (
        <div>
            <Button filter onClick={() => showFilter(!isFilterShown)}></Button>

            {isFilterShown && (
                <FilterWrapper>
                    <FilterTitle>
                        <H1>Filteren</H1>
                        <Button
                            close
                            onClick={() => showFilter(!isFilterShown)}
                        >
                            X
                        </Button>
                    </FilterTitle>

                    <H2>Genres</H2>
                    <Hr />
                    <UnorderedList>
                        {genres.map((d) => {
                            return (
                                <SpecialInput>
                                    <input
                                        type="checkbox"
                                        id={d.name}
                                        value={d.name}
                                    />
                                    <label
                                        for={d.name}
                                        style={{ backgroundColor: d.color }}
                                    >
                                        {d.name}
                                    </label>
                                </SpecialInput>
                            );
                        })}
                    </UnorderedList>
                    <H2>Emoties</H2>
                    <Hr />
                    <UnorderedList>
                        <SpecialInput>
                            <RadioButton
                                type="radio"
                                name="emotion"
                                value={emotions[0]}
                                onChange={handleEmotion}
                            />
                            <Emoji src={Overjoyed} />
                        </SpecialInput>
                        <SpecialInput>
                            <RadioButton
                                type="radio"
                                name="emotion"
                                value={emotions[1]}
                                onChange={handleEmotion}
                            />
                            <Emoji src={Happy} />
                        </SpecialInput>
                        <SpecialInput>
                            <RadioButton
                                type="radio"
                                name="emotion"
                                value={emotions[2]}
                                onChange={handleEmotion}
                            />
                            <Emoji src={Neutral} />
                        </SpecialInput>
                        <SpecialInput>
                            <RadioButton
                                type="radio"
                                name="emotion"
                                value={emotions[3]}
                                onChange={handleEmotion}
                            />
                            <Emoji src={Sad} />
                        </SpecialInput>
                        <SpecialInput>
                            <RadioButton
                                type="radio"
                                name="emotion"
                                value={emotions[4]}
                                onChange={handleEmotion}
                            />
                            <Emoji src={Crying} />
                        </SpecialInput>
                    </UnorderedList>
                    <Button primary onClick={handleFilter}>
                        Filters toepassen
                    </Button>
                </FilterWrapper>
            )}
        </div>
    );
}
