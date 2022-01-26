import React from "react";
import { StyledTileInfo, H1, H2, P, Views, Header, Button, ResponsiveVideo, Iframe } from "./style";
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
        songData,
        genre,
        emotion,
        theRef,
        onCloseClick,
        views,
        loading } = props;

    return (
        <StyledTileInfo ref={theRef} style={{ left: position.left, top: position.top }}>
            {loading && <Loader size={25} color="#26A65B" css={loaderStyle}/>}
            { !loading && <>
                <Header>
                    <H1>{title}</H1>
                    <Button onClick={onCloseClick}>X</Button>
                </Header>
                <ResponsiveVideo>
                    <Iframe
                        width="520"
                        height="296"
                        src={`https://www.youtube.com/embed/${songData.id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title="Embedded youtube"
                    />
                </ResponsiveVideo>
                <H2>{songData.title} | {genre} | <img style={{display: "inline", verticalAlign: "middle"}} width="20px" src={`${emotion}.svg`} alt="" /></H2>
                <P>{story}</P>
                <Views>{views} keer bekeken</Views>
            </>}
        </StyledTileInfo>
    )
}
