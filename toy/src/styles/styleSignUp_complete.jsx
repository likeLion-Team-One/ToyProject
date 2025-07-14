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
  flex-direction: row;
  align-items: center;
  display: flex;
`;
export const StatusBar = styled.div`
  width: 353px;
  height: 13px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f5f5;
`;
export const Status = styled.div`
  width: 355px;
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
export const Congrat = styled.div`
  color: #000;
  font-family: "BM JUA_OTF";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 73px;
  margin-bottom: 71px;
`;
export const C_Name = styled.span`
  color: #5773ff;
  text-align: center;
  font-family: "BM JUA_OTF";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px; /* 125% */
  position: relative;
  z-index: 2;
`;
export const C_Text = styled.div`
  color: #000;
  text-align: center;
  font-family: "BM JUA_OTF";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px; /* 125% */
  position: relative;
  z-index: 2;
`;
export const NextBtn = styled.div`
  width: 336px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #5773ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 54px;
`;
export const Confetti = styled.img`
  position: relative;
  width: 100%;
  height: 247px;
  border-radius: 123.5px;

  position: fixed;
  top: 130px;
  left: 0px;
  z-index: 0; /* 텍스트 뒤로 깔림 */
`;
