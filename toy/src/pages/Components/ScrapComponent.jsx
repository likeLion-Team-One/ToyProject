import * as S from "../../styles/StyledScrap";

const ComponentBox = () => {
  return (
    <S.ComponentsBox>
      <img
        className="Scrap"
        src={`${process.env.PUBLIC_URL}/image/scrap.svg`}
      />

      <img
        className="Comment"
        src={`${process.env.PUBLIC_URL}/image/comment.svg`}
      />
    </S.ComponentsBox>
  );
};

export default ComponentBox;
