import React, { useState, useEffect } from "react";

import { TilePopupWrapper, Triangle } from "./style";

export const TilePopup = ({}) => {
    //useStates

    const [songTitle, setSongTitle] = useState(
        "Rick Astley - Never Gonna Give You Up"
    );

    return (
        <TilePopupWrapper>
            {songTitle}
            <Triangle />
        </TilePopupWrapper>
    );
};
