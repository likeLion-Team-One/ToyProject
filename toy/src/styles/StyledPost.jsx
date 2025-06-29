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
  justify-content: column;
  width: 100%;
  height: 50px;
  padding: 15px;
`; // 상단 바

export const DeleteBtn = styled.div`
  width: 30%;
  height: 23px;
  flex-shrink: 0;
  stroke-width: 4px;
  stroke: #969696;
`;

export const Title = styled.div`
  width: 35%;
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

export const Temp = styled.div`
  width: 35%;
  margin-right: 10px;
  color: #969696;
  text-align: center;
  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const IWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

export const ITitle = styled.div`
  margin-left: 40px;
  width: 100%;
  color: #000;
  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`;

export const IType = styled.div`
  color: #5061ff;
  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const IContent = styled.div`
  display: flex;
  width: ${({ width }) => width || "353px"};
  height: ${({ height }) => height || "55px"};
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
  margin-top: 10px;

  textarea {
    margin: 15px;
    width: ${({ Twidth }) => Twidth || "320px"};
    height: ${({ Theight }) => Theight || "30px"};
    border: none;
    outline: none;
    resize: none;
    font-family: "SUIT";
  }

  input {
    margin: 15px;
    width: ${({ Twidth }) => Twidth || "320px"};
    height: ${({ Theight }) => Theight || "30px"};
    border: none;
    outline: none;
    font-family: "SUIT";
  }

  ul {
    width: ${({ Uwidth }) => Uwidth || "330px"};
    font-family: "SUIT";
  }
`;

export const PictureBox = styled.div`
  display: flex;
  width: 105px;
  height: 111px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
  margin-top: 10px;
  margin-left: 20px;
`;

export const rowScroll = styled.div`
  display: flex;
  align-items: column;
`;
