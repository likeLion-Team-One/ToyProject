import * as S from "../styles/StyledScrap.jsx";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(`/`);
  };

  return (
    <S.Container>
      <S.Bar>
        <S.Back onClick={goback}>
          <img src={`${process.env.PUBLIC_URL}/image/halfX.svg`}></img>
        </S.Back>
        <div className="center">스크랩</div>
      </S.Bar>
      <S.LogBox></S.LogBox>
    </S.Container>
  );
};

export default Search;
