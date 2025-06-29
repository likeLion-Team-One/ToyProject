import * as M from "../styles/StyledMenu.jsx";
import MenuBox from "../pages/Components/MenuBox.jsx";
import { useNavigate } from "react-router-dom";

const project = ["프로젝트 공고", "프로젝트 추가"];
const team = ["팀원 탐색", "찜"];
const group = ["그룹 탐색", "내 그룹", "그룹 생성"];
const my = ["최근 본 게시물", "스크랩", "프로필 설정"];

const Menu = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/home`);
  };

  return (
    <M.Container>
      <M.Bar>
        <M.DeleteBtn onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/image/delete.svg`} />
        </M.DeleteBtn>
        <M.Title>전체 메뉴</M.Title>
        <div style={{ width: "20px" }}></div>
      </M.Bar>
      <MenuBox title="프로젝트" items={project}></MenuBox>
      <MenuBox title="팀원찾기" items={team}></MenuBox>
      <MenuBox title="그룹" items={group}></MenuBox>
      <MenuBox title="마이" items={my}></MenuBox>
    </M.Container>
  );
};

export default Menu;
