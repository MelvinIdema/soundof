import styled, { css } from "styled-components";

const backgroundColor = "#2e515b";
const fontFamily = "Quicksand";
const fontColor1 = "#fff";

export const TilePopupWrapper = styled.section`
    position: absolute;
    transform: translate(calc(-50% + 70px), -90px);
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    background-color: ${backgroundColor};
    font-family: ${fontFamily};
    font-weight: 500;
    border-radius: 20px;
    align-self: end;
    align-items: center;
    color: ${fontColor1};
    margin: 10px 10px;
    text-align: center;
`;

export const Triangle = styled.div`
    background-color: ${backgroundColor};
    transform: rotateX(180deg);
    clip-path: polygon(50% 50%, 100% 100%, 0 100%);
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: 99;
    margin-top: 30px;
    margin-bottom: 100px; /*TEMPORARY!*/
`;
