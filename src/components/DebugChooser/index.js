import React from "react";
import { StyledDebugChooser } from "./style";

export default function DebugChooser(props) {
    const { value, onChange } = props;
    return (
        <StyledDebugChooser value={value} onChange={onChange} name="DebugChooser" id="DebugChooser">
            <option value="TILE_HOUSE_1">TILE_HOUSE_1</option>
            <option value="TILE_BUSH">TILE_BUSH</option>
            <option value="TILE_PATH">TILE_PATH</option>
        </StyledDebugChooser>
    )
}
