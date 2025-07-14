import styled from "styled-components";

export const Nav = styled.div`
  width: 430px; // 모바일 기준이면 이 값 유지
  height: 70px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff; // 바탕색이 없으면 투명하게 보일 수 있으니 추가

  div {
    text-align: center;
    width: 20%;
    height: 45px;
    line-height: 45px;
  }
`;
