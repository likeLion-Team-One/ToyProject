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
  align-items: center; // 가로(수평) 가운데 정렬
  margin-bottom: 10px;
`; // 전체 화면

export const Bar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-bottom: 10px;
  height: 50px;
  width: 100%;
  .center {
    flex: 1; // 남은 공간을 모두 차지
    text-align: center;
    font-family: "HakgyoansimPuzzleTTF-Black";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Back = styled.div`
  width: 11px;
  height: 23px;
  flex-shrink: 0;
`;

export const Inform = styled.div`
  color: #000;
  width: 100%;
  margin-left: 25px;
  margin-right: 25px;
  text-align: left;
  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: column;
  justify-content: space-between;
`;

export const TempWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 30px;
  padding: 15px;
  display: flex;
  border-bottom: 2px solid #d9d9d9;
  .title {
    position: absolute;
    top: 20px;
    color: #5061ff;
    font-family: "BMJUA";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .date {
    position: absolute;
    top: 20px;
    left: 300px;
    right: 10;
    color: #000;
    font-family: "SUIT";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
