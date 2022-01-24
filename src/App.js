import { useState, useEffect, useRef } from "react";
import Tile from "./components/Tile";
import { TileMenu } from "./components/TileMenu";
import "./App.css";

function App() {
  const gridEl = useRef(null);
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: null, y: null });

  /**
   * Generates a UUID to prevent same key error
   * @returns {string}
   */
  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

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
    addTile({ id: 1, filled: true, variant: 1, row: 15, col: 15 });
    tiles.forEach((row) =>
      row.forEach((tile) => tile !== 0 && renderCreatables(tile))
    );
  }, []);

  /**
   * When Grid is loaded into the DOM CSS will have centered the Grid.
   * We take the position of the Grid and put it into the Position state
   */
  useEffect(() => {
    if (!gridEl.current) return;
    setPosition({ x: gridEl.current.offsetLeft, y: gridEl.current.offsetTop });
  }, [gridEl]);

  /**
   * As soon as the Position state changes.
   * This code will run and update the left and top CSS properties
   * on the Grid Element.
   */
  useEffect(() => {
    if (!gridEl.current) return;
    gridEl.current.style.left = `${position.x}px`;
    gridEl.current.style.top = `${position.y}px`;
  }, [position]);

  /**
   * Event Handlers. As soon as the user pressed up or down the Pressed state will toggle.
   * If the Pressed state is true and the mouse moves; the Position state will be updated.
   */
  const handleMouseDown = () => setPressed(true);
  const handleMouseUp = () => setPressed(false);
  const handleMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      });
    }
  };

  /**
   * This function takes a tile {object} and checks where on the grid a creatable tile
   * should appear. Perhaps we could implement this on the server side. But we should
   * consider the possibility to view other islands without create permissions.
   * @param tile
   */
  function renderCreatables(tile) {
    if (tile.variant === 2) return;

    const defaultCreatable = {
      id: null,
      variant: 2,
      filled: false,
      row: tile.row,
      col: tile.col,
    };

    if (tile.col !== 31 && tiles[tile.row][tile.col + 1] === 0) {
      addTile({
        ...defaultCreatable,
        id: uuidv4(),
        col: tile.col + 1,
      });
    }

    if (tile.col !== 0 && tiles[tile.row][tile.col - 1] === 0) {
      addTile({
        ...defaultCreatable,
        id: uuidv4(),
        col: tile.col - 1,
      });
    }

    if (tile.row !== 0 && tiles[tile.row - 1][tile.col] === 0) {
      addTile({
        ...defaultCreatable,
        id: uuidv4(),
        row: tile.row - 1,
      });
    }

    if (tile.row !== 31 && tiles[tile.row + 1][tile.col] === 0) {
      addTile({
        ...defaultCreatable,
        id: uuidv4(),
        row: tile.row + 1,
      });
    }
  }

  /**
   * Adds a tile to the Tiles state.
   * Calls renderCreatables to determine if there should be
   * new creatable tiles added to the board.
   * @param tile
   */
  function addTile(tile) {
    setTiles(() => {
      const newTiles = [...tiles];
      newTiles[tile.row][tile.col] = tile;
      return newTiles;
    });
    renderCreatables(tile);
  }

  /**
   * Creates a creatable tile and calls the addTile function with the creatable tile.
   * Then it renders the creatables.
   * @param tile
   */
  function createFilled(tile) {
    const plaatjeID = Math.floor(Math.random() * 2);
    console.log(plaatjeID);

    const newTile = {
      id: uuidv4(),
      variant: plaatjeID,
      filled: true,
      row: tile.row,
      col: tile.col,
    };
    addTile(newTile);
    console.log(newTile);
  }

  /**
   * Function to determine what should execute when a tile is clicked. For now
   * there's only one tile: the creatable.
   * @param tile
   */
  function handleTileClick(tile) {
    if (tile.variant === 2) {
      createFilled(tile);
    }
  }

  return (<>
    <div
      className="map"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="grid isometric" ref={gridEl}>
        {tiles.map((row) => row.map((tile) => tile !== 0 && <Tile key={tile.id} onTileClick={() => handleTileClick(tile)} tile={tile}/>))}
      </div>
    </div>
  </>);
}

export default App;
