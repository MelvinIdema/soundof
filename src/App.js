import logo from "./logo.svg";
import "./App.css";

import io from "socket.io-client";
import { useEffect, useState } from "react";

import { TileMenu } from "./components/TileMenu";

const socket = io.connect("http://localhost:3001");

function App() {
    const [room, setRoom] = useState("1");

    const joinRoom = () => {
        if (room !== "") {
            socket.emit("join_room", room);
        }
    };

    useEffect(() => {
        joinRoom();
    });

    return (
        <div className="App">
            <header className="App-header">
                <TileMenu />
            </header>
        </div>
    );
}

export default App;
