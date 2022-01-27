import { useState, useEffect, useRef } from "react";
import { css } from "styled-components";
// Components
import TileMap from "./components/TileMap";
import Loader from "react-spinners/PulseLoader";
import TilePopup from "./components/TilePopup";
import TileMenu from "./components/TileMenu";
// Helpers
import generateId from "./helpers/generateId";
// Database
import db from "./firebase/firebase.config";
import {
    createTile,
    createTileInfo,
    updateTile,
    getTileInfo,
} from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";
import TileInfo from "./components/TileInfo";

const loaderStyle = css`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 9999;
`;

function App() {
    const gridEl = useRef(null);
    const infoEl = useRef(null);

    // UI States
    const [loading, setLoading] = useState(true);

    // Tile Information States
    const [tileInfoLoading, setTileInfoLoading] = useState(true);
    const [tileInfo, setTileInfo] = useState(null);
    const [tileInfoPosition, setTileInfoPosition] = useState(null);

    // TilePopup States
    const [tilePopup, setTilePopup] = useState(null);
    const [tilePopupPosition, setTilePopupPosition] = useState(null);

    // TileMenu States
    const [isCreating, setIsCreating] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(null);
    const [currentStory, setCurrentStory] = useState(null);
    const [currentGenre, setCurrentGenre] = useState("");
    const [currentEmotion, setCurrentEmotion] = useState(null);
    const [songData, setSongData] = useState(null);
    const [houseVariant, setHouseVariant] = useState("TILE_HOUSE_1");
    const [selectedTile, setSelectedTile] = useState({});

    // Drag & Drop States
    const [pressed, setPressed] = useState(false);
    const [position, setPosition] = useState({ x: null, y: null });

    // User Generated States
    const [songTitle, setSongTitle] = useState("");

    /**
     * Initializes a 2D array and fills it with 0s.
     * For demo Purposes the initial tile is added. In the future we probably want
     * to take tile data from an external API and populate the 2D array accordingly.
     * This means that the starting tile will be generated on the server side.
     */
    const [tiles, setTiles] = useState(
        new Array(32).fill([]).map(() => new Array(32).fill(0))
    );
    useEffect(() => {
        setLoading(true);

        const unsubscribe = onSnapshot(collection(db, "tiles"), snapshot => {
            const docs = snapshot.docChanges().map(doc => {
                const data = doc.doc.data();
                return {
                    id: doc.doc.id,
                    ...data
                }
            });
            docs.forEach(tile => addTile(tile));
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])

    /**
     * This function takes a tile {object} and checks where on the grid a creatable tile
     * should appear. Perhaps we could implement this on the server side. But we should
     * consider the possibility to view other islands without create permissions.
     * @param tile
     */
    function renderCreatables(tile) {
        if (tile.variant === "TILE_CREATABLE") return;

        const defaultCreatable = {
            id: null,
            variant: "TILE_CREATABLE",
            row: tile.row,
            column: tile.column,
        };

        if (tile.col !== 31 && tiles[tile.row][tile.column + 1] === 0) {
            addTile({
                ...defaultCreatable,
                id: generateId(),
                column: tile.column + 1,
            });
        }

        if (tile.col !== 0 && tiles[tile.row][tile.column - 1] === 0) {
            addTile({
                ...defaultCreatable,
                id: generateId(),
                column: tile.column - 1,
            });
        }

        if (tile.row !== 0 && tiles[tile.row - 1][tile.column] === 0) {
            addTile({
                ...defaultCreatable,
                id: generateId(),
                row: tile.row - 1,
            });
        }

        if (tile.row !== 31 && tiles[tile.row + 1][tile.column] === 0) {
            addTile({
                ...defaultCreatable,
                id: generateId(),
                row: tile.row + 1,
            });
        }
    }

  /**
   * Adds a tile to the TileMap state.
   * Calls renderCreatables to determine if there should be
   * new creatable tiles added to the board.
   * @param tile
   */
  function addTile(tile) {
    setTiles(() => {
      const newTiles = [...tiles];
      newTiles[tile.row][tile.column] = tile;
      return newTiles;
    });
    renderCreatables(tile);
  }

  /**
   * Creates a creatable tile and calls the addTile function with the creatable tile.
   * Then it renders the creatables.
   * @param tile
   * @param info
   */
  async function generateTile(tile, info) {
      const newTile = {
          variant: houseVariant,
          row: tile.row,
          column: tile.column,
          tileInfoId: null,
          views: 1,
          song: info.songData.title
      };
      const tileId = await createTile(newTile);

      const newTileInfo = {
          tileId: tileId,
          ...info
      }
      const tileInfoId = await createTileInfo(newTileInfo);

      await updateTile(tileId, { tileInfoId: tileInfoId, emotion: info.emotion, genre: info.genre })
  }
  /**
   * Function to determine what should execute when a tile is clicked. For now
   * there's only one tile: the creatable.
   * @param tile
   */
  async function handleTileClick(tile) {
    if(tile.variant === "TILE_CREATABLE") {
        setSelectedTile(tile);
        setIsCreating(true);
    }

    if(tile.variant !== "TILE_CREATABLE") {
        setSelectedTile(tile);
        setTileInfoLoading(true);

        if (tile.variant !== "TILE_CREATABLE") {
            setTileInfoLoading(true);

            const tileElementRect = document.getElementById(tile.id).getBoundingClientRect();
            setTileInfoPosition({ top: tileElementRect.top, left: tileElementRect.left });

            const tileInfoData = await getTileInfo(tile.tileInfoId);
            setTileInfo(tileInfoData);

            setTileInfoLoading(false);
            updateTile(tile.id, { views: tile.views + 1 })
        }

    }

  }

  useEffect(() => {
      if(selectedTile.id) {
          const theTile = document.getElementById(selectedTile.id);
          theTile.style.top = `-15px`;
          theTile.style.left = `-15px`;
      }
  }, [selectedTile])

    /**
     * When TileMap is loaded into the DOM CSS will have centered the TileMap.
     * We take the position of the TileMap and put it into the Position state
     */
    useEffect(() => {
        if (!gridEl.current) return;
        setPosition({
            x: gridEl.current.offsetLeft,
            y: gridEl.current.offsetTop,
        });
    }, [gridEl]);

    /**
     * As soon as the Position state changes.
     * This code will run and update the left and top CSS properties
     * on the TileMap Element.
     */
    useEffect(() => {
        if (gridEl.current) {
            gridEl.current.style.left = `${position.x}px`;
            gridEl.current.style.top = `${position.y}px`;
        }

        if (tileInfo) {
            const tileElementRect = document
                .getElementById(tileInfo.tileId)
                .getBoundingClientRect();
            setTileInfoPosition({
                top: tileElementRect.top,
                left: tileElementRect.left,
            });
        }
    }, [position]);

    /**
     * Event Handlers. As soon as the user pressed up or down the Pressed state will toggle.
     * If the Pressed state is true and the mouse moves; the Position state will be updated.
     */
    const handleMouseDown = () => { setPressed(true); setIsCreating(false) }
    const handleMouseUp = () => setPressed(false);
    const handleMouseMove = (event) => {
        if (pressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY,
            });
        }
    };

    function handleCloseClick() {
        if(selectedTile.id) {
            const theTile = document.getElementById(selectedTile.id);
            console.log(theTile);
            theTile.style.top = `0px`;
            theTile.style.left = `0px`;
        }
        setTileInfo(null);
    }

    function handleTileHover(event, tile) {
        if (tile.variant === "TILE_CREATABLE") return;

        if (event === "LEAVE") {
            setTilePopup(null);
        }

        if (event === "ENTER") {
            const tileElementRect = document
                .getElementById(tile.id)
                .getBoundingClientRect();
            setTilePopupPosition({
                top: tileElementRect.top,
                left: tileElementRect.left,
            });
            setTilePopup(tile.song ?? "Geen muziekinformatie");
        }
    }

    function handleCurrentGenreChange(genre)  {
        setCurrentGenre(genre);
    }

    function handleCurrentEmotionChange(emotion) {
        setCurrentEmotion(emotion);
    }

    function handleSongDataChange(newSongData) {
        setSongData(newSongData);
    }

    function handleCurrentTitleChange(title) {
        setCurrentTitle(title);
    }

    function handleCurrentStoryChange(story) {
        setCurrentStory(story);
    }

    function handleHouseVariantChange(variant) {
        setHouseVariant(variant);
    }

    function handleSubmit() {
        const data = {
            title: currentTitle,
            story: currentStory,
            genre: currentGenre,
            emotion: currentEmotion,
            songData: songData,
            houseVariant: houseVariant
        }

        generateTile({
            row: selectedTile.row,
            column: selectedTile.column,
            songTitle: data.songData.title
        },data)
        setIsCreating(false);
        setCurrentTitle("");
        setCurrentStory("")
        setCurrentGenre("")
        setCurrentEmotion("");
        setSongData(null);
        setHouseVariant("");
        setSelectedTile(null);
    }

  return (<>
      {loading && <Loader size={50} color="#26A65B" css={loaderStyle}/>}
      {isCreating && <TileMenu
          currentTitle={currentTitle}
          onCurrentTitleChange={handleCurrentTitleChange}
          currentStory={currentStory}
          onCurrentStoryChange={handleCurrentStoryChange}
          currentGenre={currentGenre}
          onCurrentGenreChange={handleCurrentGenreChange}
          currentEmotion={currentEmotion}
          onCurrentEmotionChange={handleCurrentEmotionChange}
          songData={songData}
          onSongDataChange={handleSongDataChange}
          houseVariant={houseVariant}
          onHouseVariantChange={handleHouseVariantChange}
          onSubmit={handleSubmit}
      />}
      {tileInfo && <TileInfo loading={tileInfoLoading} onCloseClick={handleCloseClick} theRef={infoEl} title={tileInfo.title} story={tileInfo.story} songData={tileInfo.songData} genre={tileInfo.genre} views={selectedTile.views} emotion={tileInfo.emotion} position={tileInfoPosition}/>}
      {tilePopup && <TilePopup songTitle={tilePopup} position={tilePopupPosition} />}
      <TileMap
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTileClick={handleTileClick}
          onTileHover={handleTileHover}
          theRef={gridEl}
          pressed={pressed}
          position={position}
          tiles={tiles}
          isometric
      />
  </>);
}

export default App;
