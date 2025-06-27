import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  width: 393px;
  height: 852px;
  background: #fff;
  flex-direction: column;
  align-items: center; // 가로(수평) 가운데 정렬
`; // 전체 화면

export const Bar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 50px;
  width: 100%;
  .center {
    flex: 1; // 남은 공간을 모두 차지
    text-align: center;
    font-family: "Hakgyoansim Puzzle OTF";
    font-size: 25px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;

export const Back = styled.div`
  width: 11px;
  height: 23px;
  flex-shrink: 0;
`;

export const LogBox = styled.div`
  padding: 15px;
  width: 393px;
  height: 722px;
  flex-shrink: 0;
  color: #000;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
`;
