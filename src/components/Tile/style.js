import styled, { css } from "styled-components";
import Bush from "./assets/bush.png";
import Path from "./assets/path_01.png";

const viewsBuilding2 = 10;
const viewsBuilding3 = 20;
const viewsBuilding4 = 30;

const emotions = ["overjoyed", "happy", "neutral", "sad", "crying"];
const genres = ["r&b", "alternative", "rock", "volksmuziek", "electronisch", "latin", "jazz", "pop", "k-pop", "klassiek", "hip-hop"]

export const StyledTile = styled.div(
    ({ variant, views, genre, emotion }) => css`
        position: relative;
        z-index: 0;
        transition: all 300ms ease-in-out;

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

        ${variant !== "TILE_PATH" && css`
          &:hover {
            &:after {
              opacity: 0.8;
            }
          }
        `} 

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

        ${variant === "TILE_FOUNTAIN" && 
            css`
              &:after {
                background-image: url('fontein.png');
                width: 164px;
                height: 220px;
                top: 38px;
                left: 36px;
              }
            `
        }

        ${variant === "TILE_HOUSE_1" &&
        css`
            &:after {
                width: 171px;
                height: 264px;
                top: 22px;
                left: 24px;
                background-image: url("${process.env
                    .PUBLIC_URL}/house_1/TILE_HOUSE_1${genres.indexOf(
                    genre.toLowerCase()
                ) + 1}.1.${emotions.indexOf(emotion) + 1}.png");
            }

            ${views >= 10 &&
            css`
                &:after {
                    height: 292px;
                    top: 12px;
                    left: 14px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_1/TILE_HOUSE_1${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.2.${emotions.indexOf(emotion) + 1}.png");
                }
            `}

            ${views >= 20 &&
            css`
                &:after {
                    height: 330px;
                    top: 0px;
                    left: 1px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_1/TILE_HOUSE_1${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.3.${emotions.indexOf(emotion) + 1}.png");
                }
            `}

          ${views >= 30 &&
            css`
                &:after {
                    height: 386px;
                    top: -16px;
                    left: -14px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_1/TILE_HOUSE_1${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.4.${emotions.indexOf(emotion) + 1}.png");
                }
            `}
        `}



        ${variant === "TILE_HOUSE_2" &&
        css`
            &:after {
                width: 171px;
                height: 243px;
                top: 29px;
                left: 33px;
                background-image: url("${process.env
                    .PUBLIC_URL}/house_2/TILE_HOUSE_2${genres.indexOf(
                    genre.toLowerCase()
                ) + 1}.1.${emotions.indexOf(emotion) + 1}.png");
            }
            ${views >= 10 &&
            css`
                &:after {
                    height: 285px;
                    top: 12px;
                    left: 14px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_2/TILE_HOUSE_2${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.2.${emotions.indexOf(emotion) + 1}.png");
                }
            `}
            ${views >= 20 &&
            css`
                &:after {
                    height: 327px;
                    top: -1px;
                    left: 0px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_2/TILE_HOUSE_2${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.3.${emotions.indexOf(emotion) + 1}.png");
                }
            `} ${views >= 30 &&
            css`
                &:after {
                    height: 366px;
                    top: -17px;
                    left: -16px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_2/TILE_HOUSE_2${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.4.${emotions.indexOf(emotion) + 1}.png");
                }
            `}
        `}
        
        ${variant === "TILE_HOUSE_3" &&
        css`
            &:after {
                width: 171px;
                height: 228px;
                top: 35px;
                left: 38px;
                background-image: url("${process.env
                    .PUBLIC_URL}/house_3/TILE_HOUSE_3${genres.indexOf(
                    genre.toLowerCase()
                ) + 1}.1.${emotions.indexOf(emotion) + 1}.png");
            }

            ${views >= 10 &&
            css`
                &:after {
                    height: 269px;
                    top: 21px;
                    left: 22px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_3/TILE_HOUSE_3${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.2.${emotions.indexOf(emotion) + 1}.png");
                }
            `}${views >= 20 &&
            css`
                &:after {
                    height: 310px;
                    top: 6px;
                    left: 9px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_3/TILE_HOUSE_3${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.3.${emotions.indexOf(emotion) + 1}.png");
                }
            `} ${views >= 30 &&
            css`
                &:after {
                    height: 351px;
                    top: -5px;
                    left: -5px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_3/TILE_HOUSE_3${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.4.${emotions.indexOf(emotion) + 1}.png");
                }
            `}
        `}

        ${variant === "TILE_HOUSE_4" &&
        css`
            &:after {
                width: 171px;
                height: 241px;
                top: 32px;
                left: 33px;
                background-image: url("${process.env
                    .PUBLIC_URL}/house_4/TILE_HOUSE_4${genres.indexOf(
                    genre.toLowerCase()
                ) + 1}.1.${emotions.indexOf(emotion) + 1}.png");
            }

            ${views >= 10 &&
            css`
                &:after {
                    height: 284px;
                    top: 18px;
                    left: 18px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_4/TILE_HOUSE_4${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.2.${emotions.indexOf(emotion) + 1}.png");
                }
            `}
            ${views >= 20 &&
            css`
                &:after {
                    height: 324px;
                    top: 3px;
                    left: 4px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_4/TILE_HOUSE_4${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.3.${emotions.indexOf(emotion) + 1}.png");
                }
            `} ${views >= 30 &&
            css`
                &:after {
                    height: 363px;
                    top: -9px;
                    left: -9px;
                    background-image: url("${process.env
                        .PUBLIC_URL}/house_4/TILE_HOUSE_4${genres.indexOf(
                        genre.toLowerCase()
                    ) + 1}.4.${emotions.indexOf(emotion) + 1}.png");
                }
            `}
        `}

    
  ${variant === "TILE_PATH" &&
        css`
            background: #3e3e3e;
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
