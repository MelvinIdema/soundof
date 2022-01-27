import styled, { css } from "styled-components";
import FilterIcon from "./assets/filtericon.svg";

const backgroundColor = "#2e515b";
const fontFamily = "Quicksand";
const fontColor1 = "#fff";
const fontColor2 = "#000";
const inputBackgroundColor = "#fff";
const primaryButtonColor = "#486f88";
const buttonHoverBackgroundColor = "#fff";

export const FilterWrapper = styled.div`
    background-color: #b1ccd5;
    font-family: ${fontFamily};
    position: absolute;
    z-index: 9999;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 40px;
    margin: 20px;
    right: 0;
`;

export const TextBox = styled.input`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    margin-bottom: 12px;
    margin-top: -5px;
`;

export const H1 = styled.h1`
    font-weight: bold;
    font-size: 2em;
`;

export const H2 = styled.h2`
    font-size: 1.6em;
    margin-left: 40px;
`;

export const UnorderedList = styled.ul``;

export const Button = styled.button`
    border: none;
    ${(props) =>
        props.primary &&
        css`
            width: 300px;
            border-radius: 15px;
            padding: 10px 10px;
            margin: 10px auto;
            font-size: 1.6em;
            font-weight: bold;
            font-family: ${fontFamily};
            background-color: ${primaryButtonColor};
            color: ${fontColor2};
            border: 3px solid transparent;
            &:hover {
                background-color: #b1ccd5;
                color: ${primaryButtonColor};
                border: 3px solid ${primaryButtonColor};
            }
        `}

    ${(props) =>
        props.close &&
        css`
            background-color: transparent;
            font-family: ${fontFamily};
            font-weight: 500;
            font-size: 2em;
            margin-top: 15px;
            margin-right: 10px;
            position: absolute;
            right: 0;
            &:hover {
                color: ${fontColor1};
            }
        `}
        ${(props) =>
        props.filter &&
        css`
            padding: 10px;
            position: absolute;
            z-index: 9999;
            right: 0;
            margin: 10px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            background-image: url(${FilterIcon});
            background-repeat: no-repeat;
            background-position: center;
            background-color: #fff;
            border-radius: 10px;
        `}
`;

export const SpecialInput = styled.div`
    margin-top: 10px;
    display: flex;
    input {
        width: 20px;
        border: none;
        border-radius: 5px;
        width: 1.3em;
        height: 1.3em;
        background-color: white;

        vertical-align: middle;
        border: 1px solid #ddd;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
    }

    input:checked {
        background-color: #000;
    }
    label {
        display: block;
        width: 150px;
        padding: 0 10px;
        border: 3px solid transparent;
        text-align: left;
        font-family: ${fontFamily};
        font-size: 1.2em;
        color: ${fontColor1};
        margin-left: 5px;
        border-radius: 10px;
        position: absolute;
        margin-left: 30px;
        margin-top: -2px;
    }
`;

export const RadioButton = styled.input`
    margin-top: 10px;
    display: flex;
    input {
        width: 20px;
        border: none;
        border-radius: 5px;
        width: 1.3em;
        height: 1.3em;
        background-color: white;

        vertical-align: middle;
        border: 1px solid #ddd;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
    }

    input:checked {
        background-color: #000;
    }
`;

export const Hr = styled.hr`
    margin-top: -10px;
    width: 240px;
    margin-left: 30px;
    color: #000;
`;

export const FilterTitle = styled.div`
    display: flex;
    margin-left: 40px;
    position: relative;
    margin-bottom: -30px;
`;

export const Emoji = styled.img`
    width: 40px;
    height: 40px;
    border: none;
    position: absolute;
    margin-left: 25px;
`;
