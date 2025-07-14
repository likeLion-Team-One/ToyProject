import * as S from "../../styles/StyledSearch.jsx";

const SearchKeyword = ({ keyword }) => {
  return (
    <S.SBox>
      {keyword}
      <img src={`${process.env.PUBLIC_URL}/image/X.svg`}></img>
    </S.SBox>
  );
};

export default SearchKeyword;
