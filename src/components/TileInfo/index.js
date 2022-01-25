import React from "react";
import { StyledTileInfo } from "./style";
import { css } from "styled-components";
import Loader from "react-spinners/PulseLoader";
const loaderStyle = css`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%; left: 50%;
  z-index: 9999;
`;

export default function TileInfo(props) {
    const {
        title,
        story,
        position,
        theRef,
        onCloseClick,
        loading } = props;

    return (
        <StyledTileInfo ref={theRef} style={{ left: position.left, top: position.top }}>
            {loading && <Loader size={25} color="#26A65B" css={loaderStyle}/>}
            { !loading && <>
                <h1>{title}</h1>
                <p>{story}</p>
                <button onClick={onCloseClick}>close</button>
            </>}
        </StyledTileInfo>
    )
}
