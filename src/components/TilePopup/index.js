import React from "react";
import { TilePopupWrapper, Triangle } from "./style";

export default ({songTitle, position}) => {
    return (
        <TilePopupWrapper style={{ left: position.left, top: position.top }}>
            {songTitle}
            <Triangle />
        </TilePopupWrapper>
    );
};
