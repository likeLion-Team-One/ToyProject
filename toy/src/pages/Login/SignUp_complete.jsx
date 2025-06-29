import React from "react";
import { useNavigate } from "react-router-dom";
import * as SU from "../../styles/styleSignUp_complete";
const SignUp_agree = () => {
  const navigate = useNavigate();
  const GoProfile = () => {
    navigate(`/Profile`);
  };
  return (
    <SU.Container>
      <SU.Header>
        <SU.BackBtn
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          alt="뒤로가기"
          width="15"
          height="27"
        />
        <SU.SUText>회원가입</SU.SUText>
      </SU.Header>
      <SU.StatusBar>
        <SU.Status></SU.Status>
      </SU.StatusBar>
      <SU.Step>
        STEP 03
        <br />
        회원가입 완료
      </SU.Step>
      <SU.Congrat>
        <SU.C_Name>
          김솜솜<span style={{ fontSize: "25px", color: "#000" }}>님,</span>
        </SU.C_Name>
        <SU.C_Text>가입을 축하드립니다!</SU.C_Text>
        <SU.Confetti src={`${process.env.PUBLIC_URL}/images/confetti.svg`} />
      </SU.Congrat>
      <SU.NextBtn onClick={GoProfile}>로그인 하러 가기</SU.NextBtn>
    </SU.Container>
  );
};
export default SignUp_agree;
