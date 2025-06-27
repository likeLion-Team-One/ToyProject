import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 352px;
  height: 194px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${({ borderColor }) => borderColor || "#5061ff"};
  background: ${({ bgColor }) => bgColor || "#5061ff"};
  box-shadow: 0px 0px 10px 3px ${({ shadowColor }) => shadowColor || "#5061ff"};
  justify-content: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.div`
  color: ${({ hdColor }) => hdColor || "#5061ff"};
  font-family: "BM JUA_OTF";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const People = styled.div`
  width: 18.424px;
  height: 20.353px;
  svg {
    flex-shrink: 0;
    fill: ${({ hdColor }) => hdColor || "#5061ff"};
    stroke-width: 20px;
    stroke: ${({ hdColor }) => hdColor || "#5061ff"};
  }
  margin: 10px;
`;

export const Text = styled.div`
  color: ${({ hdColor }) => hdColor || "#5061ff"};
  font-family: "BM JUA_OTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Icon = styled.div`
  width: 116.198px;
  height: 116.198px;
  flex-shrink: 0;
  aspect-ratio: 116.2/116.2;
`;

export const Bar = styled.div``;

export const Scroll = styled.div`
  width: 100%;
  height: 20px;
  text-align: right;
  margin-top: 20px;
  position: relative;
`;
