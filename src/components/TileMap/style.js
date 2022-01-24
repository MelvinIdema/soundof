import styled, { css } from "styled-components";

export const StyledMap = styled.div`
  height: 100%;
  width: 100%;
  background-color: #EDFAFF;
  overflow: hidden;
  cursor: grab;
`

export const StyledGrid = styled.div(({ isometric }) => css`
  display: grid;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  grid-template-columns: repeat(32, 115px);
  grid-template-rows: repeat(32, 115px);
  user-select: none;
  
  ${isometric && css`
    transform: translateX(-50%) translateY(-50%) translateZ(3em) rotateX(60deg) rotateZ(45deg);
    transform-style: preserve-3d;
  `}
`)
