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
  align-items: center; // 가로(수평) 가운데 정렬
`; // 전체 화면

export const Bar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 50px;
  width: 100%;
  .center {
    flex: 1; // 남은 공간을 모두 차지
    text-align: center;
    font-family: "HakgyoansimPuzzleTTF-Black";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Back = styled.div`
  width: 11px;
  height: 23px;
  flex-shrink: 0;
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
  justify-content: space-between;

  input {
    border: none;
    outline: none;
  }
`; // 검색바

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 393px;
  margin: 20px;
  gap: 30px;
`;

export const ProfileBox = styled.div`
  position: relative;
  width: 170px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 2px 2px #f2f2f2;

  .profile {
    padding: 10px;
    width: 74px;
    height: 74px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    border-radius: 300px;
  }

  .heart {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

export const ProfileName = styled.div`
  position: absolute;
  top: 30px;
  left: 90px;
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProfileNameBig = styled(ProfileName)`
  top: 90px;
  left: 175px;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProfileStatus = styled.div`
  position: absolute;
  top: 55px;
  left: 90px;
  color: #000;
  font-family: "SUIT";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AddBtn = styled.div`
  position: absolute;
  top: 90px;
  left: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #5061ff;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: #000;
  text-align: center;
  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const AddBtnSmall = styled(AddBtn)`
  top: 140px;
  left: 175px;
`;

export const LogBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 393px;
  height: 722px;
  flex-shrink: 0;
  color: #000;
  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  text-align: left;
  line-height: normal;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
  .picture {
    z-index: 10; // 우선순위
    padding: 10px;
    width: 133px;
    height: 133px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    border-radius: 300px;
  }
`;

export const ProfileInform = styled.div`
  position: absolute;
  top: 100px;
  width: 420px;
  height: 637px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 0px 2px 2px #f2f2f2;
`;

export const Inform = styled.div`
  color: #000;
  width: 100%;
  margin-left: 25px;
  margin-top: 10px;
  text-align: left;
  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: column;
  justify-content: space-between;
`;

export const StatusTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 180px;

  .category {
    padding: 8px;
    color: #000;
    font-family: "SUIT";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .content {
    color: #000;
    font-family: "SUIT";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const UserIntro = styled.div`
  display: flex;
  width: 296px;
  height: 162px;
  margin: 20px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(80, 97, 255, 0.05);
  box-shadow: 0px 0px 2px 2px #f2f2f2;
  color: #000;

  div {
    padding: 10px;
    font-family: "SUIT";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ComponentsBox = styled.div`
  margin: 0 auto;
  position: relative;
  width: 353px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 2px 2px #f2f2f2;
`;
