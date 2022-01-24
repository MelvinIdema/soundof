import React, { useState, useEffect } from "react";
import "../css/FilterMenu.css";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

export const FilterMenu = ({}) => {
    const genres = [
        "Kies een genre",
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
    const emotions = ["angry", "sad", "neutral", "happy", "overjoyed"];
    return (
        <div className="filterMenu">
            <h1>Filter</h1>
            <ul>
                {emotions.map((d) => {
                    return (
                        <li>
                            <input
                                type="radio"
                                className={d}
                                name="emotion"
                                value={d}
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
            <button id="sendButton">🔍</button>
        </div>
    );
};
