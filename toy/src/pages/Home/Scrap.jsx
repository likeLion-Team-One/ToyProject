import * as S from "../../styles/StyledScrap.jsx";
import { useNavigate } from "react-router-dom";
import GroupCover from "../Components/GroupCover.jsx";
import ProjectCover from "../Components/ProjectCover.jsx";
import BottomNav from "../Components/BottomNav.jsx";

const Scrap = ({ num }) => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(`/home`);
  };

  return (
    <S.Container>
      <S.Bar>
        <S.Back onClick={goback}>
          <img src={`${process.env.PUBLIC_URL}/image/halfX.svg`}></img>
        </S.Back>
        <div className="center">스크랩</div>
      </S.Bar>
      <S.ScrapLogBox>
        <div style={{ display: "flex", gap: "10px" }}>
          <S.CBox>전체</S.CBox>
          <S.CBox>프로젝트</S.CBox>
          <S.CBox>그룹</S.CBox>
        </div>
        <div style={{ marginTop: "10px" }}>{num}개의 글</div>

        <div>
          <S.Title>프로젝트</S.Title>
          <ProjectCover></ProjectCover>
        </div>
        <div>
          <S.Title>그룹</S.Title>
          <GroupCover></GroupCover>
        </div>
      </S.ScrapLogBox>
      <BottomNav idx={-1}></BottomNav>
    </S.Container>
  );
};

export default Scrap;
