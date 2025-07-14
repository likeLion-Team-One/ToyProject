import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  width: 393px;
  height: 852px;
  background: #fff;
  flex-direction: column;
`; // 전체 화면

export const Bar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 15px;
`; // 상단 바

export const DeleteBtn = styled.div`
  width: 11px;
  height: 23px;
  flex-shrink: 0;
  stroke-width: 4px;
  stroke: #969696;
`;

export const Title = styled.div`
  width: 125px;
  height: 40px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "HakgyoansimPuzzleTTF-Black";
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const BContainer = styled.div`
  margin: 15px;
`;

export const BTitle = styled.div`
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 353px;
  height: auto;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(80, 97, 255, 0.05);
  box-shadow: 0px 0px 2px 2px #f2f2f2;
  color: #000;
  padding: 20px;
`;

export const BoxBtn = styled.div`
  width: 45%;
  font-family: "SUIT-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 5px;
`;
