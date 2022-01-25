import { useState, useEffect } from "react";
import { css } from "styled-components";
// Components
import TileMap from "./components/TileMap";
import Loader from "react-spinners/PulseLoader";
import DebugChooser from "./components/DebugChooser";
// Helpers
import generateId from "./helpers/generateId";
// Database
import db from "./firebase/firebase.config";
import { createTile, updateTile } from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";

const loaderStyle = css`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%; left: 50%;
  z-index: 9999;
`;

function App() {
    const [loading, setLoading] = useState(true);
    const [variant, setVariant] = useState("TILE_HOUSE_1");

  /**
   * Initializes a 2D array and fills it with 0s.
   * For demo Purposes the initial tile is added. In the future we probably want
   * to take tile data from an external API and populate the 2D array accordingly.
   * This means that the starting tile will be generated on the server side.
   */
  const [tiles, setTiles] = useState(new Array(32).fill([]).map(() => new Array(32).fill(0)));
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
   */
  function generateTile(tile) {
    const newTile = {
      id: generateId(),
      variant: variant,
      row: tile.row,
      column: tile.column,
    };
    createTile(newTile);
  }

  /**
   * Function to determine what should execute when a tile is clicked. For now
   * there's only one tile: the creatable.
   * @param tile
   */
  function handleTileClick(tile) {
    if (tile.variant === "TILE_CREATABLE") {
        generateTile(tile);
    }
    if(tile.variant === "TILE_HOUSE_1") {
        if(tile.level !== 4) {
            updateTile(tile, { level: parseInt(tile.level + 1) })
        }
    }
  }

  return (<>
      <DebugChooser value={variant} onChange={(e) => setVariant(e.currentTarget.value)}/>
      {loading && <Loader size={50} color="#26A65B" css={loaderStyle}/>}
      <TileMap onTileClick={handleTileClick} tiles={tiles} isometric/>
  </>);
}

export default App;
