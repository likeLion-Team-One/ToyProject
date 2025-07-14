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
export const ProjectContainer = styled.div`
  width: 393px;
  height: 722px;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Search = styled.div`
  width: 353px;
  height: 36px;
  border-radius: 20px;
  border: 1px solid #5061ff;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 9px;
  margin-top: 22px;
  margin-bottom: 18px;
`;
export const CategoryBox = styled.div`
  width: 393px;
  height: 80px;
  gap: 10px;
  display: flex;
  flex-direction: row;
`;
export const Category = styled.div`
  width: 70px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #5061ff;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: inline-block;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.text`
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ProjectBox = styled.div`
  display: flex;
  flex-dirction: row;
  justify-content: center;
  width: 353px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 2px 2px #f2f2f2;
`;
export const PJImg = styled.div`
  width: 105px;
  height: 105px;
  flex-shrink: 0;
  background: #000;
`;
export const PJ = styled.div`
  width: 200px;
  height: 118px;
`;
export const PJName = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const PJDetail = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
