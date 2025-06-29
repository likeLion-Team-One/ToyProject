import React from "react";
import { useNavigate } from "react-router-dom";
import * as G from "../../styles/Group/styleGroup";
const Group = () => {
  const navigate = useNavigate();
  const GoSignUp = () => {
    navigate(`/SignUp_complete`);
  };
  return (
    <G.Container>
      <G.Header>
        <G.BackBtn
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          alt="뒤로가기"
        />
        <G.PText>그룹 정보</G.PText>
      </G.Header>
    </G.Container>
  );
};
