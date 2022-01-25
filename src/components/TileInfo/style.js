import styled, { css } from "styled-components";

export const StyledTileInfo = styled.div(props => css`
  position: absolute;
  top: ${props.top}px;
  left: ${props.left}px;
  z-index: 4;
  padding: 20px 100px 20px 20px;
  border-radius: 5px;
  transform: translate(45%, -95%);
  background: white;
`)
