import styled, { css } from "styled-components";

export const StyledTileInfo = styled.div(props => css`
  position: absolute;
  z-index: 4;
  padding: 20px 20px 60px 20px;
  transform: translate(100px, -95%);
  background: #ACBBBE;
  border-radius: 25px;
  width: 350px;
`)

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin-bottom: 12px;
  margin-top: -5px;
`

export const H1 = styled.h1`
  margin: 0 auto;
  font-size: 24px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`

export const H2 = styled.h2`
  font-size: 18px;
`

export const P = styled.p`
  word-break: break-word;
`

export  const Button = styled.button`
  position: relative;
  top: 3px; right: -4px;
  appearance: none;
  border: none;
  background: none;
  font-size: 24px;
  color: #535353;
`

export const ResponsiveVideo = styled.div`
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25%;
    height: 0;
    max-width: 520px;
    max-height: 296px;
    margin: auto;
`;

export const Iframe = styled.iframe`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`;

export const Views = styled.span`
  display: block;
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: 600;
`
