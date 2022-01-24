import React, { useEffect, useRef, useState } from "react";
import { StyledMap, StyledGrid } from './style';
import Tile from "../Tile";

export default function TileMap(props) {
  const { isometric, tiles, onTileClick } = props;
  const gridEl = useRef(null);
  const [position, setPosition] = useState({ x: null, y: null });
  const [pressed, setPressed] = useState(false);

  /**
   * When TileMap is loaded into the DOM CSS will have centered the TileMap.
   * We take the position of the TileMap and put it into the Position state
   */
  useEffect(() => {
    if (!gridEl.current) return;
    setPosition({ x: gridEl.current.offsetLeft, y: gridEl.current.offsetTop });
  }, [gridEl]);

  /**
   * As soon as the Position state changes.
   * This code will run and update the left and top CSS properties
   * on the TileMap Element.
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

  return (
    <StyledMap
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <StyledGrid isometric={isometric} ref={gridEl}>
        {tiles.map((row) => row.map((tile) => tile !== 0 && <Tile key={tile.id} onTileClick={() => onTileClick(tile)} tile={tile}/>))}
      </StyledGrid>
    </StyledMap>
  )
}
