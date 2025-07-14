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
  align-items: "center"; // 가로(수평) 가운데 정렬
`; // 전체 화면

export const Bar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 313px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #5061ff;
  background: #fff;
  padding: 0 15px;
  margin: 30px 0px 25px 30px;
  justify-content: space-between;

  input {
    border: none;
    outline: none;
  }
`; // 검색바

export const LogBox = styled.div`
  flex-direction: column;
  padding: 15px;
  width: 393px;
  height: 722px;
  flex-shrink: 0;
  color: #000;
  font-family: "SUIT";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
`;

export const Back = styled.div`
  width: 11px;
  height: 23px;
  flex-shrink: 0;
`;

export const SBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #5061ff;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: #000;
  text-align: center;
  font-family: "SUIT-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  img {
    position: absolute;
    right: 15px;
  }
`;

export const rowScroll = styled.div`
  display: flex;
  align-items: column;
`;
