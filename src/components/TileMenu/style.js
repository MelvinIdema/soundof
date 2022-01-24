import styled, { css } from "styled-components";
import Angry from "./assets/angry.svg";
import Sad from "./assets/sad.svg";
import Neutral from "./assets/neutral.svg";
import Happy from "./assets/happy.svg";
import Overjoyed from "./assets/overjoyed.svg";

export const TileMenuWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    background-color: #ffffff;
    font-family: "Arial";
    border-radius: 5px;
    position: absolute;
    align-self: end;
    align-items: center;
    color: #1a3b45;
    margin: 10px 10px;
    z-index: 1;
    width: 600px;
    right: 0;
`;

export const Button = styled.button`
    font-size: 1em;
    padding: 5px 10px;
    border-radius: 5px;
    border: 3px solid transparent;
    margin: 10px auto;
    text-align: center;

    ${(props) =>
        props.primary &&
        css`
            background-color: #71a668;
            color: #ffffff;
            &:hover {
                background-color: #ffffff;
                color: #71a668;
                border: 3px solid #71a668;
                width: 200px;
            }
        `}

    ${(props) =>
        props.secondary &&
        css`
            background-color: #da6048;
            color: #ffffff;
            &:hover {
                background-color: #ffffff;
                color: #da6048;
                border: 3px solid #da6048;
            }
        `}
`;

export const H1 = styled.h1`
    font-size: 1.8em;
`;
export const TextArea = styled.textarea`
    font-size: 1em;
    padding: 5px 10px;
    border-radius: 5px;
    height: 90px;
    resize: none;
    border: none;
    background-color: #f7f6f3;
    margin-bottom: 5px;
    width: 500px;
    font-family: "Arial";
    color: #1a3b45;
`;
export const TextInput = styled.input`
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1em;
    width: 500px;
    background-color: #f7f6f3;
    margin-bottom: 5px;
    color: #1a3b45;
    ${(props) =>
        props.normal &&
        css`
            width: 500px;
        `}
    ${(props) =>
        props.search &&
        css`
            width: 470px;
        `}
`;
export const RadioButton = styled.input`
    -webkit-appearance: none;
    width: 50px;
    height: 50px;
    border: none;
    cursor: pointer;
    &:hover {
        border: 3px solid #1a3b45;
        border-radius: 100%;
    }
    &:checked {
        border: 3px solid #71a668;
        border-radius: 100%;
    }
    ${(props) =>
        props.angry &&
        css`
            background: {url("./assets/angry.svg") center;}
            background-size: cover;
        `}
    ${(props) =>
        props.sad &&
        css`
            background: url("./assets/sad.svg") center;
            background-size: cover;
        `}
    ${(props) =>
        props.neutral &&
        css`
            background: url("./assets/neutral.svg") center;
            background-size: cover;
        `}
    ${(props) =>
        props.happy &&
        css`
            background: url("./assets/happy.svg") center;
            background-size: cover;
        `}
    ${(props) =>
        props.overjoyed &&
        css`
            background: url("./assets/overjoyed.svg") center;
            background-size: cover;
        `}
`;
export const DropDownMenu = styled.select`
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1em;
    width: 500px;
    background-color: #f7f6f3;
    margin-bottom: 5px;
    color: #1a3b45;
    width: 520px;
`;
export const UnorderedList = styled.ul`
    margin-left: -40px;
    list-style-type: none;
    display: flex;
    justify-content: center;
`;

export const Triangle = styled.div`
    background-color: #fff;
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
    position: relative;
    height: 0;
    margin-bottom: 10px;
`;

export const IFrame = styled.iframe`
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
`;
