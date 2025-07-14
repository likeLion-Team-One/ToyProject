import * as A from "../../styles/StyledFindTeam.jsx";
import { useNavigate } from "react-router-dom";
import GroupCover from "../Components/GroupCover.jsx";
import BottomNav from "../Components/BottomNav.jsx";

const AddGroup = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(`/home`);
  };

  return (
    <A.Container>
      <A.Bar>
        <A.Back onClick={goback}>
          <img src={`${process.env.PUBLIC_URL}/image/halfX.svg`}></img>
        </A.Back>
        <div className="center">그룹 추가</div>
      </A.Bar>
      <A.LogBox>
        내 그룹
        <GroupCover></GroupCover>
        <GroupCover></GroupCover>
        <GroupCover></GroupCover>
      </A.LogBox>
      <BottomNav idx={-1}></BottomNav>
    </A.Container>
  );
};

export default AddGroup;
