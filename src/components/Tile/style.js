import styled, { css } from 'styled-components';
import Bush from "./assets/bush.png";
import Path from "./assets/path_01.png";

// house_1
import House11 from "./assets/house_1/huis1.1.png";
import House12 from "./assets/house_1/huis1.2.png";
import House13 from "./assets/house_1/huis1.3.png";
import House14 from "./assets/house_1/huis1.4.png";

export const StyledTile = styled.div(({ variant, level }) => css`
  position: relative;
  z-index: 0;
  background-color: #3c3c3c;
  
  &:hover {
    outline: 6px dashed #D0DFFF;
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
    
    ${variant === "TILE_HOUSE_1" && level === 1 && 
        css`
          &:after {
            background-image: url(${House11});
            width: 164px;
            height: 203px;
            top: 44px;
            left: 44px;
          }
        `
    }

    ${variant === "TILE_HOUSE_1" && level === 2 &&
    css`
          &:after {
            background-image: url(${House12});
            width: 164px;
            height: 245px;
            top: 30px;
            left: 30px;
          }
        `
    }

    ${variant === "TILE_HOUSE_1" && level === 3 &&
    css`
          &:after {
            background-image: url(${House13});
            width: 164px;
            height: 287px;
            top: 16px;
            left: 16px;
          }
        `
    }

    ${variant === "TILE_HOUSE_1" && level === 4 &&
    css`
          &:after {
            background-image: url(${House14});
            width: 164px;
            height: 326px;
            top: 2px;
            left: 2px;
          }
        `
    }
    
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
