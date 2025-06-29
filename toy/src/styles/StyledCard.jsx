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
  margin-left: 30px;
`;

export const Header = styled.div`
  color: ${({ hdColor }) => hdColor || "#5061ff"};
  font-family: "BMJUA";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  line-height: normal;
  margin-top: 10px;
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
  margin-top: 8px;
  color: ${({ hdColor }) => hdColor || "#5061ff"};
  font-family: "BM JUA_OTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Icon = styled.div`
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  aspect-ratio: 116.2/116.2;
  margin-top: 10px;
`;

export const Bar = styled.div``;

export const Scroll = styled.div`
  width: 100%;
  height: 20px;
  text-align: right;
  margin-top: 20px;
  position: relative;

  img {
    position: absolute;
  }
`;

export const Box = styled.div`
  width: 136px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 10px;
  position: relative;
`;

export const BTitle = styled.div`
  color: #5061ff;
  font-family: font-family: "BMJUA";;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BContent = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BoxBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 110px;
  left: 29px;
  width: 79px;
  height: 34.207px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #5061ff;
  background: #5061ff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
