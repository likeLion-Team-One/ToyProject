import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1362px;
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
  width="15"
  height="27"
`;
export const PText = styled.div`
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
`;

export const ProfileBox = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;
export const Text = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px;
  margin-top: 15px;
`;
export const Box = styled.input`
  width: 353px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
  font-size: 20px;
`;
export const TextArea = styled.textarea`
  width: 353px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
`;
export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const GenderOption = styled.div`
  border: 1px solid #5061ff;
  border-radius: 8px;
  cursor: pointer;
  width: 156px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 선택되면 배경 파랑, 아니면 흰색 */
  background: ${({ selected }) => (selected ? "#5061ff" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#5061ff")};
  font-family: SUIT;
  font-weight: 500;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 39px;
`;
export const DropdownWrapper = styled.div`
  position: relative;
  width: 353px;
`;

export const DropdownBox = styled.div`
  width: 160px;
  height: 55px; /* 동일한 높이 */
  padding: 0 16px; /* 상하 padding 대신 height로 맞춤 */
  border: 1px solid #5061ff;
  border-radius: 10px;
  background: #fff;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box; /* padding 포함 */
`;

export const Arrow = styled.span`
  margin-left: 8px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "none")};
  transition: transform 0.2s;
`;

export const DropdownOptions = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 5px;
  border: 1px solid #5061ff;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const DropdownOption = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background: #f0f6ff;
  }
`;
