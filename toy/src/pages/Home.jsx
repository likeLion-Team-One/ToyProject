import * as H from "../styles/StyledHome.jsx";
import Card from "./Components/ToyCard.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/menu`);
  };
  const goSearch = () => {
    navigate(`/search`);
  };
  const goScrap = () => {
    navigate(`/scrap`);
  };
  return (
    <H.Container>
      <H.Bar>
        <H.Plus onClick={goMenu}>
          <img src={`${process.env.PUBLIC_URL}/image/plus.svg`} />
        </H.Plus>
        <H.Logo>
          <img
            src={`${process.env.PUBLIC_URL}/image/logo.png`}
            alt="logo"
            width="92px"
          />
        </H.Logo>
        <H.Scrap onClick={goScrap}>
          <img src={`${process.env.PUBLIC_URL}/image/scrap.svg`} />
        </H.Scrap>
      </H.Bar>
      <H.Search onClick={goSearch}>
        <img src={`${process.env.PUBLIC_URL}/image/search.svg`} alt="search" />
      </H.Search>
      <H.Text>진행중인 프로젝트</H.Text>
      <Card
        header="토이 프로젝트"
        image={`${process.env.PUBLIC_URL}/image/fire.png`}
        bgColor="#5061ff"
        borderColor="#5061FF"
        shadowColor="#5061FF;"
        hdColor="#fff"
        people="4"
      ></Card>
      <H.Text>최근 완료된 프로젝트</H.Text>
      <Card
        header="해커톤 대회"
        image={`${process.env.PUBLIC_URL}/image/con.png`}
        bgColor="#fff"
        borderColor="#5061FF"
        shadowColor="#5061FF"
        hdColor="#5061FF"
        people="6"
      ></Card>
    </H.Container>
  );
};

export default Home;
