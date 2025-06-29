import * as S from "../../styles/StyledSearch.jsx";
import Key from "../Components/SearchKeyword.jsx";
import BottomNav from "../Components/BottomNav.jsx";
import { useNavigate } from "react-router-dom";

const Search = ({ keyword }) => {
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
        <S.Search>
          <input placeholder="검색어를 입력하세요."></input>
          <img
            src={`${process.env.PUBLIC_URL}/image/search.svg`}
            alt="search"
          />
        </S.Search>
      </S.Bar>
      <S.LogBox>
        최근 검색어
        <S.rowScroll>
          <div style={{ display: "flex", gap: "10px", padding: "15px" }}>
            <Key keyword={keyword}></Key>
          </div>
        </S.rowScroll>
      </S.LogBox>
      <BottomNav idx={-1}></BottomNav>
    </S.Container>
  );
};

export default Search;
