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
  justify-content: center;
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
  position: relative;
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

  &.active {
    border-color: #5061ff;
    box-shadow: 0 0 0 2px rgba(80, 97, 255, 0.2);
  }

  .selected-value {
    padding: 15px;
    width: 100%;
  }
`;

export const PictureBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 105px;
  height: 111px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
  margin-top: 10px;
  color: #969696;

  .main {
    text-align: center;
    font-family: "SUIT";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const rowScroll = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const AddBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 353px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #5773ff;
  color: #fff;
  text-align: center;
  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Scroll = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownOptions = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: ${({ Uwidth }) => Uwidth || "100%"};
  background: #fff;
  border: 1px solid #5773ff;
  border-radius: 10px;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
`;

export const DropdownOption = styled.li`
  padding: 12px 16px;
  list-style: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f4ff;
  }

  &.selected {
    background: #5061ff;
    color: white;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalBox = styled.div`
  background: #5061ff;
  border-radius: 16px;
  padding: 32px 24px 24px 24px;
  min-width: 260px;
  text-align: center;
  color: #fff;
  font-family: "SUIT";
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.15);
`;

export const ModalButtonRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  justify-content: center;
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  height: 35px;
  flex-shrink: 0;
  background: #fff;
  color: #5061ff;
  border-radius: 30px;
  border: 1px solid #5773ff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 10px 28px;
  color: #000;

  text-align: center;
  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
