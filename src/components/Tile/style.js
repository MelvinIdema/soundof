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
    width: 431px;
    height: 269px;
    content: " ";
    position: absolute;
    top: -38px;
    left: -2px;
    background-repeat: no-repeat;
    transform: translateX(0) translateY(0) translateZ(0) rotateX(-60deg) rotateZ(-22deg);
    z-index: 1;
    background-size: 51% 39%;
  }
  
  ${variant === 0 &&
    css`
      &:before {
        background-image: url(${Bush});
      }
    `}

  ${variant === 1 &&
  css`
      &:before {
        background-image: url(${Path});
      }
    `}

  ${variant === 2 && css`
    outline: 6px dashed #D0DFFF;
    outline-offset: -6px;
    cursor: pointer;

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
