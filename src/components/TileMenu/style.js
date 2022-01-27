import styled, { css } from "styled-components";
import Crying from "./assets/crying.svg";
import Sad from "./assets/sad.svg";
import Neutral from "./assets/neutral.svg";
import Happy from "./assets/happy.svg";
import Overjoyed from "./assets/overjoyed.svg";

const backgroundColor = "#2e515b";
const fontFamily = "Quicksand";
const fontColor1 = "#fff";
const fontColor2 = "#000";
const inputBackgroundColor = "#fff";
const primaryButtonColor = "#71a668";
const secondaryButtonColor = "#e79356";
const youtubeButtonColor = "#b33c41";
const buttonHoverBackgroundColor = "#fff";

export const TileMenuWrapper = styled.section `
    position: absolute;
    top: 0; right: 0;
    text-align: center;
    padding: 5px 20px;
    background-color: #2e515b;
    font-weight: 500;
    color: white;
    z-index: 9999;
    width: 30vw;
    min-width: 500px;
    height: 100%;
    max-height: 100vh;
    overflow-y: scroll;
`;

export const StepWrapper = styled.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: calc(100% - 76px);
`;

export const Button = styled.button `
    box-sizing: border-box;
    font-family: ${fontFamily};
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    border: none;

    ${(props) =>
        props.primary &&
        css`
            width: 100%;
            border-radius: 20px;
            padding: 10px 15px;
            margin: 10px auto;
            background-color: ${primaryButtonColor};
            color: ${fontColor1};
            &:hover {
                background-color: ${buttonHoverBackgroundColor};
                color: ${primaryButtonColor};
                border: 3px solid ${primaryButtonColor};
            }
        `}

    ${(props) =>
        props.secondary &&
        css`
            width: 100%;
            border-radius: 20px;
            padding: 10px 15px;
            margin: 10px auto;
            background-color: ${secondaryButtonColor};
            color: ${fontColor1};
            &:hover {
                background-color: ${buttonHoverBackgroundColor};
                color: ${secondaryButtonColor};
                border: 3px solid ${secondaryButtonColor};
            }
        `}
    ${(props) =>
        props.search &&
        css`
            font-size: 1em;
            height: 30px;
            margin: 10px auto 0;
            background-color: ${youtubeButtonColor};
            color: ${fontColor1};
            &:hover {
                background-color: ${buttonHoverBackgroundColor};
                color: ${youtubeButtonColor};
            }
        `}
    ${(props) =>
        props.arrowLeft &&
        css`
            background-color: ${secondaryButtonColor};
            clip-path: polygon(100% 0, 50% 50%, 100% 100%);
            width: 100px;
            height: 100px;
            position: absolute;
            left: 0;
            margin-left: 100px;
            margin-top: 50px;
            &:hover {
                opacity: 0.5;
            }
        `}
    ${(props) =>
        props.arrowRight &&
        css`
            background-color: ${secondaryButtonColor};
            clip-path: polygon(0 0, 50% 50%, 0 100%);
            width: 100px;
            height: 100px;
            position: absolute;
            right: 0;
            margin-right: 100px;
            margin-top: 50px;
            &:hover {
                opacity: 0.5;
            }
        `}
`;

export const H1 = styled.h1`
    font-size: 1.6em;
    font-family: ${fontFamily};
    margin-bottom: 16px;
    margin-top: 16px;
`;
export const H2 = styled.h2`
    font-size: 1.6em;
    font-family: ${fontFamily};
    margin-bottom: 5px;
`;
export const P = styled.p`
    font-size: 1.2em;
    font-family: ${fontFamily};
    font-weight: 500;

    ${(props) =>
        props.var2 &&
        css`
            margin: 5px;
        `}
`;
export const TextArea = styled.textarea`
    box-sizing: border-box;
    font-size: 1em;
    padding: 5px 10px;
  
    height: 100%;
    resize: none;
    border: none;
    background-color: ${inputBackgroundColor};
    margin-bottom: 5px;
    width: 100%;
    font-family: ${fontFamily};
    font-weight: 500;
    color: ${fontColor2};

    ::selection {
        background: ${secondaryButtonColor};
    }
    ::-moz-selection {
        background: ${secondaryButtonColor};
    }
`;
export const TextInput = styled.input`
    box-sizing: border-box;
    border: none;
    padding: 5px 10px;
    font-size: 1em;
    font-family: ${fontFamily};
    font-weight: 500;
    width: 100%;
    background-color: ${inputBackgroundColor};
    color: ${fontColor2};

    ::selection {
        background: ${secondaryButtonColor};
    }
    ::-moz-selection {
        background: ${secondaryButtonColor};
    }

    ${(props) =>
        props.normal &&
        css`
            margin-bottom: 5px;
            height: 31px;
            margin-top: -1px;
        `}
    ${(props) =>
        props.search &&
        css`
            margin-bottom: 10px;
            width: calc(100% - 28px);
        `}
`;
export const RadioButton = styled.input`
    appearance: none;
    -webkit-appearance: none;
    width: 35px;
    height: 35px;
    border: none;
    cursor: pointer;
    &:hover {
        border: 3px solid ${secondaryButtonColor};
        border-radius: 100%;
    }
    &:checked {
        border: 3px solid #459e5a;
        border-radius: 100%;
    }
    ${(props) =>
        props.crying &&
        css`
            background-image: url(${Crying});
            background-size: cover;
        `}
    ${(props) =>
        props.sad &&
        css`
            background-image: url(${Sad});
            background-size: cover;
        `}
    ${(props) =>
        props.neutral &&
        css`
            background-image: url(${Neutral});
            background-size: cover;
        `}
    ${(props) =>
        props.happy &&
        css`
            background-image: url(${Happy});
            background-size: cover;
        `}
    ${(props) =>
        props.overjoyed &&
        css`
            background-image: url(${Overjoyed});
            background-size: cover;
        `}
`;
export const DropDownMenu = styled.select`
    box-sizing: border-box;
    border: none;
    font-family: ${fontFamily};
    font-weight: 500;
    padding: 5px 10px;
    /*border-radius: 5px;*/
    font-size: 1em;
    background-color: ${inputBackgroundColor};
    margin-top: 10px;
    margin-bottom: 15px;
    color: ${fontColor2};
    width: 100%;
`;

export const DropDownOption = styled.option``;

export const UnorderedList = styled.ul`
    margin-top: -10px;
    margin-left: -40px;
    list-style-type: none;
    display: flex;
    justify-content: center;
`;

export const ResponsiveVideo = styled.div`
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25%;
    width: 100%;
    margin-bottom: 12px;
`;

export const Iframe = styled.iframe`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`;

export const Carousel = styled.div`
    display: flex;
    margin-bottom: 20px;
    img {
        background-color: #edfaff;
        width: 200px;
        padding: 50px 160px;
    }
`;

export const GenreWrapper = styled.div`
    display: flex;
    flex-direction: row;

    svg {
        width: 36px;
        height: 36px;
    }
`;

export const EmotionWrapper = styled.div`
    margin: 10px 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
  align-items: center;
`
