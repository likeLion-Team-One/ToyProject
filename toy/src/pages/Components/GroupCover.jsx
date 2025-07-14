import * as S from "../../styles/StyledScrap";

const GroupCover = ({ title, num }) => {
  return (
    <S.ComponentsBox>
      <img src={`${process.env.PUBLIC_URL}/image/groupIcon.svg`}></img>
      <div class="header-group">
        <div class="Title">제아페</div>
        <div class="MemberCount">
          <img src={`${process.env.PUBLIC_URL}/image/people.svg`}></img>6
        </div>
      </div>
      <div class="Tag">#공고</div>
    </S.ComponentsBox>
  );
};

export default GroupCover;
