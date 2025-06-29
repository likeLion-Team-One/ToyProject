import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 850px;
  background: #fff;
  align-items: center;
  display: flex;
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
`;
export const Status = styled.div`
  width: 251px;
  height: 13px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #5773ff;
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
  width: 140px;
  height: 21px;
  flex-shrink: 0;
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const SUContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Input = styled.input`
  width: 304px;
  height: 41px;
  flex-shrink: 0;
  color: #969696;
  text-align: left;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: transparent;
  border-bottom: 1px solid #5061ff;
  margin-top: 5px;
  margin-bottom: 10px;
`;
export const Marketing_Agree = styled.div`
  width: 140px;
  height: 21px;
  flex-shrink: 0;
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 41px;
`;
export const AgreeOption = styled.div`
  height: 20px;
  display: flex;
  text-align: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 13px;
  margin-bottom: 26px;
`;
export const AgreeBtn = styled.div`
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 0.5px solid #5773ff;
  background: #5061ff;
`;

export const NextBtn = styled.div`
  width: 393px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center; /* ← 여기가 수직 정렬 */
  background: #5061ff;
  color: #fff;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
