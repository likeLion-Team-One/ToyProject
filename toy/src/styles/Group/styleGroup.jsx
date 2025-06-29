import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1102px;
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
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SearchBar = styled.div`
  width: 353px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #5061ff;
  background: #fff;
`;
export const TabMenu = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px 120px;
`;
export const Tab = styled.div`
  color: ${(props) => (props.active ? "#5061FF" : "#969696")};
  cursor: pointer;
  text-align: center;
  font-family: "BM JUA_OTF";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: 3px solid #5061ff;
`;
export const GroupCount = styled.div`
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: space-around;
  display: flex;
  margin: 22px 26px;
`;
export const FilterIcon = styled.img`
  width: 18.75px;
  height: 18.75px;
  flex-shrink: 0;
`;
export const GroupList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;
export const GroupCard = styled.div`
  width: 353px;
  height: 120px;
  display: flex; /*썸네일, 정보 가로 배치 */
  align-items: center;
  padding: 12px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 2px 2px #f2f2f2;
`;
export const GroupThumbnail = styled.div`
  width: 87px;
  height: 87px;
  flex-shrink: 0;
`;
export const GroupInfo = styled.div`
  width: 107px;
  height: 87px;
`;
export const GroupTitle = styled.div`
  color: #5061ff;
  font-family: "BM JUA_OTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MemberCount = styled.div`
  color: #5061ff;
  font-family: "BM JUA_OTF";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const GroupTags = styled.div`
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const RequestButton = styled.div`
  width: 69px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #5061ff;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
export const GroupBottom = styled.div`
  width: 110px;
  display: flex;
  flex-direction: row;
`;
export const Comment = styled.img`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;
export const Like = styled.img`
  width: 17px;
  height: 22px;
  flex-shrink: 0;
`;
export const FloatingAdd = styled.div`
  position: fixed; /*떠있게 */
  right: 20px;
  bottom: 80px;
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  fill: #d9d9d9;
  font-size: 20px;
  color: #969696;
`;
export const GroupContainer = styled.div`
  width: 393px;
  height: 990px;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
`;
