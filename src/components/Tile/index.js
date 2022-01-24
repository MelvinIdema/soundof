import React from "react";
import { StyledTile } from "./style";

export default function Tile(props) {
  const { tile, onTileClick } = props;
  return (
    <StyledTile
      id={tile.id}
      style={{
        gridColumn: tile.col + 1,
        gridRow: tile.row + 1,
      }}
      onClick={onTileClick}
      variant={tile.variant}
    />
  )
}
