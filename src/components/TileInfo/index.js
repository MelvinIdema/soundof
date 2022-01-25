import React from "react";
import { StyledTileInfo } from "./style";

export default function TileInfo(props) {
    const { title, story, position } = props;

    return (
        <StyledTileInfo top={position.top} left={position.left}>
            <h1>{title}</h1>
            <p>{story}</p>
        </StyledTileInfo>
    )
}
