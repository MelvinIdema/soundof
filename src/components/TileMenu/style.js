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
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    background-color: ${backgroundColor};
    font-family: ${fontFamily};
    font-weight: 500;
    border-radius: 20px;
    position: absolute;
    align-self: end;
    align-items: center;
    color: ${fontColor1};
    margin: 10px 10px;
    z-index: 1;
    width: 600px;
    right: 0;
`;

export const StepWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled.button `
    font-size: 1.4em;
    border: 3px solid transparent;
    text-align: center;
    font-family: ${fontFamily};
    font-weight: bold;

    ${(props) =>
        props.primary &&
        css`
            width: 522px;
            border-radius: 20px;
            padding: 15px 20px;
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
            width: 522px;
            border-radius: 20px;
            padding: 15px 20px;
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
                border: 3px solid ${youtubeButtonColor};
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
    font-size: 2.4em;
    font-family: ${fontFamily};
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
    font-size: 1em;
    padding: 5px 10px;
    /*border-radius: 5px;*/
    height: 90px;
    resize: none;
    border: none;
    background-color: ${inputBackgroundColor};
    margin-bottom: 5px;
    width: 500px;
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
    border: none;
    padding: 5px 10px;
    /*border-radius: 5px;*/
    font-size: 1em;
    font-family: ${fontFamily};
    font-weight: 500;
    width: 500px;
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
            width: 500px;
        `}
    ${(props) =>
        props.search &&
        css`
            margin-bottom: 10px;
            width: 464px;
        `}
`;
export const RadioButton = styled.input`
    -webkit-appearance: none;
    width: 50px;
    height: 50px;
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
    border: none;
    font-family: ${fontFamily};
    font-weight: 500;
    padding: 5px 10px;
    /*border-radius: 5px;*/
    font-size: 1em;
    width: 500px;
    background-color: ${inputBackgroundColor};
    margin-top: 10px;
    margin-bottom: 15px;
    color: ${fontColor2};
    width: 520px;
`;

export const DropDownOption = styled.option``;

export const UnorderedList = styled.ul`
    margin-top: -10px;
    margin-left: -40px;
    list-style-type: none;
    display: flex;
    justify-content: center;
`;

export const Triangle = styled.div`
    background-color: ${backgroundColor};
    clip-path: polygon(100% 0, 50% 50%, 100% 100%);
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 50%;
    z-index: 99;
    left: -100px;
`;

export const ResponsiveVideo = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    height: 0;
    margin-bottom: 10px;
    max-width: 520;
    max-height: 296;
    margin: auto;
`;

export const iFrame = styled.iframe`
    left: 0;
    top: 0;
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