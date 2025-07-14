import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 393px;
  height: 852px;
  background: linear-gradient(180deg, #b1beff 0%, #5061ff 100%);
  flex-direction: column;
  color: #fff;
  text-align: center;
  font-family: "PyeongChang Peace";
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  img {
    display: flex;
    width: 195px;
    height: 89px;
    flex-shrink: 0;
  }
  div {
    padding: 15px;
  }
`; // 전체 화면
