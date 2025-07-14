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
  align-items: center;
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
`;

export const Logo = styled.div`
  display: flex;
  width: 92px;
  height: 42px;
  flex-shrink: 0;
  aspect-ratio: 92.34/42;
`; // 상단 로고

export const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 351px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #5061ff;
  background: #fff;
  padding: 0 15px;
  margin: 10px 21px 20px; 21px;
  img {
    position: absolute;
    right: 20px;
  }
  input {
    border: none;
    outline: none;
  }
`; // 검색바

export const Scrap = styled.div`
  width: 20px;
  height: 26px;
  flex-shrink: 0;
  fill: #969696;
`; // 스크랩 버튼

export const Plus = styled.div`
  width: 25px;
  height: 20px;
  flex-shrink: 0;
  fill: #969696;
`;

export const Text = styled.div`
  color: #5773ff;
  font-family: "BMJUA";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 32px;
  width: 100%;
`;

export const rowScroll = styled.div`
  display: flex;
  align-items: column;
`;

export const Scroll = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
