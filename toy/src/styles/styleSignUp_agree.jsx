import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 850px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const BackBtn = styled.img`
  position: absolute;
  left: 20px;
  height: 23px;
  flex-shrink: 0;
`;
export const SUText = styled.div`
  width: 125px;
  height: 36px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Hakgyoansim Puzzle OTF";

  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
export const Header = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const StatusBar = styled.div`
  width: 353px;
  height: 13px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f5f5;
  margin: 16px 0 8px;
`;
export const Status = styled.div`
  width: 56px;
  height: 13px;
  border-radius: 10px;
  background: #5061ff;
`;
export const Step = styled.div`
  width: 242px;
  height: 52px;
  flex-shrink: 0;
  color: #5061ff;
  text-align: center;
  font-family: "BM JUA_OTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Text = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 6px;
  width: 90%;
  text-align: left;
`;
export const TermBox = styled.div`
  width: 353px;
  height: 140px;
  border-radius: 10px;
  border: 1px solid #5061ff;
  background: #fff;
  box-shadow: 0px 0px 2px 2px #f2f2f2;
  overflow-y: scroll; /* scroll로 고정 */
  margin-bottom: 15px;
  box-sizing: border-box;

  padding: 0; /* padding 제거, 내부 TermContent에서만 */

  /* 스크롤바 */
  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #5061ff;
    border-radius: 10px;
    width: 6px;
  }
`;
export const TermContent = styled.div`
  padding: 12px 16px 12px 12px; /* 오른쪽 여백을 조금 더 */
  font-family: SUIT;
  font-size: 13px;
  line-height: 20px;
`;
export const TermBtnGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: right;
`;

export const TermOption = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 6px;
  cursor: pointer;
  font-family: SUIT;
  font-size: 14px;
`;

export const AgreeAll = styled.div`
  width: 353px;
  height: 55px;
  display: flex; /* 중앙 정렬을 위한 핵심 */
  justify-content: center;
  align-items: center; /* ← 여기가 텍스트를 수직 중앙 정렬 */
  border-radius: 10px;
  border: 1px solid #5061ff;
  background: #fff;
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 16px 0;
`;

export const NextBtn = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center; /* ← 여기가 수직 정렬 */
  background: #5061ff;
  color: #fff;
  font-family: SUIT;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  margin-top: auto;
`;

export const TermBtn = styled.div`
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 0.5px solid #5061ff;
  background: #fff;
`;
