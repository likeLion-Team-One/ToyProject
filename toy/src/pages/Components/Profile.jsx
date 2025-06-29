import * as P from "../../styles/StyledFindTeam";
import { useNavigate } from "react-router-dom";

const Profile = ({ name, status, onClick }) => {
  const navigate = useNavigate();
  const goAdd = (e) => {
    e.stopPropagation(); // 상위 onClick 방지!
    navigate(`/addgroup`);
  };

  return (
    <P.ProfileBox onClick={onClick}>
      <img
        className="profile"
        src={`${process.env.PUBLIC_URL}/image/profile.png`}
      ></img>
      <img
        className="heart"
        src={`${process.env.PUBLIC_URL}/image/heart.svg`}
      ></img>
      <P.ProfileName>{name}</P.ProfileName>
      <P.ProfileStatus>{status}</P.ProfileStatus>
      <P.AddBtn onClick={goAdd}>그룹 추가</P.AddBtn>
    </P.ProfileBox>
  );
};

export default Profile;
