import styled, { css } from "styled-components";

export const StyledTileInfo = styled.div(props => css`
  position: absolute;
  z-index: 4;
  padding: 30px 30px 80px 30px;
  transform: translate(125px, -50%);
  background: white;
  border-radius: 10px;
  width: 350px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
  &:after {
    content: '';
    height: 7px;
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    ${props.genre === "r&b" && css`background: #B3368B;`}
    ${props.genre === "alternative" && css`background: #B22F7D;`}
    ${props.genre === "rock" && css`background: #89161C;`}
    ${props.genre === "volksmuziek" && css`background: #BA4520;`}
    ${props.genre === "electronisch" && css`background: #DB6769;`}
    ${props.genre === "latin" && css`background: #EB8753;`}
    ${props.genre === "jazz" && css`background: #DBAB5A;`}
    ${props.genre === "pop" && css`background: #108675;`}
    ${props.genre === "klassiek" && css`background: #53A9C3;`}
    ${props.genre === "k-pop" && css`background: #346078;`}
    ${props.genre === "hip-hop" && css`background: #564075;`}
  }
  
  &:before {
    content: '';
    background-color: white;
    clip-path: polygon(100% 0, 50% 50%, 100% 100%);
    width: 65px;
    height: 65px;
    position: absolute;
    transform: translate(0, 50%);
    bottom: 50%;
    z-index: 99;
    left: -64px;
  }
  
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
  bottom: 30px;
  right: 30px;
  font-weight: 600;
`
