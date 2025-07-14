import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../Components/BottomNav.jsx";
import * as P from "../../styles/styleProfile";

const Profile = () => {
  const navigate = useNavigate();
  const GoEdit = () => {
    navigate(`/Profile_edit`);
  };
  return (
    <P.Container>
      <P.Header>
        <P.BackBtn
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          alt="뒤로가기"
        />
        <P.PText>마이</P.PText>
      </P.Header>
      <P.ProfileBox>
        <img
          src={`${process.env.PUBLIC_URL}/image/Profile.svg`}
          alt="Profile"
        ></img>
        <P.LogIn>
          <P.LogIn_please></P.LogIn_please>
          로그인 하고 지금 바로
          <br />
          프로젝트에 참여해 보세요!
        </P.LogIn>
      </P.ProfileBox>
      <P.Edit onClick={GoEdit}>프로필 수정</P.Edit>
      <P.Stories>
        활동내역
        <P.StoriesBox>
          <P.Story>내 그룹</P.Story>
          <P.Story>찜</P.Story>
          <P.Story>스크랩</P.Story>
        </P.StoriesBox>
      </P.Stories>
      <BottomNav idx={-1}></BottomNav>
    </P.Container>
  );
};
export default Profile;
