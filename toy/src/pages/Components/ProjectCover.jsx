import * as S from "../../styles/StyledScrap";

const ProjectCover = ({ title, num }) => {
  return (
    <S.ComponentsBox>
      <S.PJImg />
      <div class="header-group">
        <div class="Title">제아페</div>
        <div class="MemberCount">
          <img src={`${process.env.PUBLIC_URL}/image/people.svg`}></img>6
        </div>
      </div>
      <div class="Tag">#공고</div>
      <img
        src={`${process.env.PUBLIC_URL}/image/scrap.svg`}
        class="Scrap"
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/image/comment.svg`}
        class="Comment"
      ></img>
    </S.ComponentsBox>
  );
};

export default ProjectCover;
