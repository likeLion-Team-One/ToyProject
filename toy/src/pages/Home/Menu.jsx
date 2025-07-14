import * as M from "../../styles/StyledMenu.jsx";
import MenuBox from "../../pages/Components/MenuBox.jsx";
import { useNavigate } from "react-router-dom";

const project = [
  { label: "프로젝트 공고", path: "/project" },
  { label: "프로젝트 추가", path: "/post" },
];

const team = [
  { label: "팀원 탐색", path: "/find" },
  { label: "찜", path: "/find" },
];

const group = [
  { label: "그룹 탐색", path: "/" },
  { label: "내 그룹", path: "/group/my" },
  { label: "그룹 생성", path: "/group/create" },
];

const my = [
  { label: "최근 본 게시물", path: "/my/recent" },
  { label: "스크랩", path: "/scrap" },
  { label: "프로필 설정", path: "/profile_edit" },
];

const Menu = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/home`);
  };

  const goMenu = (path) => {
    navigate(path);
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
      <MenuBox title="프로젝트" items={project} onClick={goMenu}></MenuBox>
      <MenuBox title="팀원찾기" items={team} onClick={goMenu}></MenuBox>
      <MenuBox title="그룹" items={group} onClick={goMenu}></MenuBox>
      <MenuBox title="마이" items={my} onClick={goMenu}></MenuBox>
    </M.Container>
  );
};

export default Menu;
