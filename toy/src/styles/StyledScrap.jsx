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

export const ScrapLogBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 393px;
  height: 722px;
  flex-shrink: 0;
  color: #000;

  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
`;

export const LogBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 393px;
  height: 722px;
  flex-shrink: 0;
  color: #000;

  font-family: "SUIT";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
`;

export const CBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #5061ff;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Title = styled.div`
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
`;

export const ComponentsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
  position: relative;
  width: 353px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 2px 2px #f2f2f2;

  .header-group {
    position: absolute;
    left: 125px;
    top: 20px;
    display: flex;
    align-items: center;
    gap: 10px; /* 요소 사이 10px 간격 */
  }

  .MemberCount {
    display: flex;
    gap: 5px;
    color: #5061ff;
    font-family: "BMJUA";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .Title {
    color: #5061ff;
    font-family: "BMJUA";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .Comment {
    position: absolute;
    bottom: 10px;
    right: 40px;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    stroke-width: 1.5px;
    stroke: #5061ff;
  }

  .Scrap {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 17px;
    height: 22px;
    flex-shrink: 0;
    fill: #5061ff;
  }

  .Tag {
    position: absolute;
    left: 125px;
    color: #000;
    font-family: "SUIT";
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const PJImg = styled.div`
  position: absolute;
  left: 10px;
  width: 105px;
  height: 105px;
  flex-shrink: 0;
  background: #000;
`;
