import styled, { css } from "styled-components";
import Bush from "./assets/bush.png";
import Path from "./assets/path_01.png";

const viewsBuilding2 = 10;
const viewsBuilding3 = 20;
const viewsBuilding4 = 30;

const emotions = ["overjoyed", "happy", "neutral", "sad", "crying"];
const genres = ["r&b", "alternative", "rock", "volksmuziek", "electronic", "latin", "jazz", "pop", "k-pop", "", "hip-hop"]

export const StyledTile = styled.div(
        ({ variant, views, genre, emotion }) => css `
        position: relative;
        z-index: 0;

        &:hover {
            outline: 6px dashed #d0dfff;
            outline-offset: -6px;
            cursor: pointer;
        }

        &:after {
            content: "";
            position: absolute;
            transform: translate(-50%, -50%) rotateX(0) rotateZ(-45deg);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: center;
            pointer-events: none;
            z-index: 3;
        }

        ${variant === "TILE_BUSH" &&
        css`
            &:after {
                background-image: url(${Bush});
                width: 163px;
                height: 201px;
                top: 45px;
                left: 45px;
            }
        `}
        
        
        ${variant === "TILE_HOUSE_1" && css`
          
          &:after {
            width: 171px;
            height: 264px;
            top: 22px;
            left: 24px;
            background-image: url("${process.env.PUBLIC_URL}/house_1/TILE_HOUSE_1${genres.indexOf(genre) + 1}.1.${emotions.indexOf(emotion) + 1}.png");
          }

          ${views >= 10 && css`
            &:after {
              height: 292px;
              top: 12px;
              left: 14px;
              background-image: url("${process.env.PUBLIC_URL}/house_1/TILE_HOUSE_1${genres.indexOf(genre) + 1}.2.${emotions.indexOf(emotion) + 1}.png");
            }
          `}

          ${views >= 20 && css`
            &:after {
              height: 330px;
              top: 0px;
              left: 1px;
              background-image: url("${process.env.PUBLIC_URL}/house_1/TILE_HOUSE_1${genres.indexOf(genre) + 1}.3.${emotions.indexOf(emotion) + 1}.png");
            }
          `}

          ${views >= 30 && css`
            &:after {
              height: 386px;
              top: -16px;
              left: -14px;
              background-image: url("${process.env.PUBLIC_URL}/house_1/TILE_HOUSE_1${genres.indexOf(genre) + 1}.4.${emotions.indexOf(emotion) + 1}.png");
            }
          `}
          
        `}
        
    
  ${variant === "TILE_PATH" &&
        css`
            &:after {
                background-image: url(${Path});
                width: 164px;
                height: 188px;
                top: 49px;
                left: 49px;
            }
        `}

  ${variant === "TILE_CREATABLE" &&
        css`
            outline: 6px dashed #d0dfff;
            outline-offset: -6px;
            cursor: pointer;
            background-color: transparent;

            &:after {
                content: "+";
                font-size: 64px;
                color: #d0dfff;
                position: absolute;
                transform: translate(-50%, -50%);
                top: calc(50% - 4px);
                left: calc(50% - 4px);
            }
        `}
    `
);
