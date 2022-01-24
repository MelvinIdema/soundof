import styled, { css } from 'styled-components';
import Bush from "./assets/bush.png";
import Path from "./assets/path_01.png";

export const StyledTile = styled.div(({ variant }) => css`
  position: relative;
  z-index: 1;
  background-color: #3c3c3c;
  
  &:hover {
    outline: 6px dashed #D0DFFF;
    outline-offset: -6px;
    cursor: pointer;
  }
  
  &:before {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%) rotateX(0) rotateZ(-45deg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    pointer-events: none;
  }
  
  ${variant === "TILE_BUSH" &&
    css`
      &:before {
        background-image: url(${Bush});
        width: 163px;
        height: 201px;
        top: 45px;
        left: 45px;
      }
    `}

  ${variant === "TILE_PATH" &&
  css`
      &:before {
        background-image: url(${Path});
        width: 164px;
        height: 188px;
        top: 49px;
        left: 49px;
      }
    `}

  ${variant === "TILE_CREATABLE" && css`
    outline: 6px dashed #D0DFFF;
    outline-offset: -6px;
    cursor: pointer;
    background-color: transparent;

    &:after {
      content: '+';
      font-size: 64px;
      color: #D0DFFF;
      position: absolute;
      transform: translate(-50%, -50%);
      top: calc(50% - 4px);
      left: calc(50% - 4px);
    }
  `}
`)
