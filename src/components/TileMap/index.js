import React, { useEffect, useRef, useState } from "react";
import { StyledMap, StyledGrid } from './style';
import Tile from "../Tile";

export default function TileMap(props) {
  const {
      isometric,
      tiles,
      onTileClick,
      onTileHover,
      theRef,
      onMouseDown,
      onMouseMove,
      onMouseUp
  } = props;

  return (
    <StyledMap
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <StyledGrid isometric={isometric} ref={theRef}>
        {tiles.map((row) => row.map((tile) => tile !== 0 && <Tile key={tile.id} onTileHover={onTileHover} onTileClick={() => onTileClick(tile)} tile={tile}/>))}
      </StyledGrid>
    </StyledMap>
  )
}
