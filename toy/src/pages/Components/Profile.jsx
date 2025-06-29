import * as P from "../../styles/StyledFindTeam";

const Profile = ({ name, status, onClick }) => {
  return (
    <P.ProfileBox onClick={onClick}>
      <img
        class="profile"
        src={`${process.env.PUBLIC_URL}/image/profile.png`}
      ></img>
      <img
        class="heart"
        src={`${process.env.PUBLIC_URL}/image/heart.svg`}
      ></img>
      <P.ProfileName>{name}</P.ProfileName>
      <P.ProfileStatus>{status}</P.ProfileStatus>
      <P.AddBtn>그룹 추가</P.AddBtn>
    </P.ProfileBox>
  );
};

export default Profile;
