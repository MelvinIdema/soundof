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

export const FilterMenuWrapper = styled.section `
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
    width: 400px;
    left: 0;
`;
export const Button = styled.button `
    border: 3px solid transparent;
    text-align: center;
    font-family: ${fontFamily};
    font-weight: bold;

    ${(props) =>
        props.primary &&
        css`
            font-size: 1.4em;
            width: 400px;
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
`;

export const H1 = styled.h1`
    font-size: 2.4em;
    font-family: ${fontFamily};
`;
export const H2 = styled.h2`
    font-size: 1.4em;
    font-family: ${fontFamily};
    font-weight: 700;
    margin-bottom: 30px;
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

export const CheckBox = styled.div`
    input {
    }
    label {
        padding: 10px;
        background-color: black;
        border: 3px solid transparent;
        text-align: center;
        font-family: ${fontFamily};
        font-weight: bold;
        font-size: 1.2em;
        color: ${fontColor1};
        margin-left: 10px;
        margin-bottom: 10px;
        border-radius: 20px;
    }
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

export const UnorderedList = styled.ul`
    margin-top: -10px;
    margin-left: -40px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: self;

    ${(props) =>
        props.genres &&
        css`
            display: block;
        `}
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