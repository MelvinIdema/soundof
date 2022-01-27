import React, { useEffect } from "react";
import { StyledTile } from "./style";

export default function Tile(props) {
  const { tile, onTileClick, onTileHover } = props;

  useEffect(() => console.log(tile), [tile])

  return (
    <StyledTile
      id={tile.id}
      style={{
        gridColumn: tile.column + 1,
        gridRow: tile.row + 1,
      }}
      onClick={onTileClick}
      onMouseEnter={() => onTileHover("ENTER", tile)}
      onMouseLeave={() => onTileHover("LEAVE", tile)}
      variant={tile.variant}
      views={tile.views}
      emotion={tile.emotion}
      genre={tile.genre}
    />
  )
}
