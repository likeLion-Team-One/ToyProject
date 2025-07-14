import React from "react";
import { useNavigate } from "react-router-dom";
import * as SU from "../../styles/styleSignUp";
const SignUp_agree = () => {
  const navigate = useNavigate();
  const GoSignUp = () => {
    navigate(`/SignUp_complete`);
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
        STEP 02
        <br />
        회원정보 입력하기
      </SU.Step>
      <SU.SUContainer>
        <SU.Text>
          이름<span style={{ color: "#E01B1B" }}>*</span>
        </SU.Text>
        <SU.Input id="name" placeholder="실명"></SU.Input>
        <SU.Text>
          아이디<span style={{ color: "#E01B1B" }}>*</span>
        </SU.Text>
        <SU.Input id="ID"></SU.Input>
        <SU.Text>
          비밀번호<span style={{ color: "#E01B1B" }}>*</span>
        </SU.Text>
        <SU.Input id="PW"></SU.Input>
        <SU.Text>
          비밀번호 확인<span style={{ color: "#E01B1B" }}>*</span>
        </SU.Text>
        <SU.Input id="configPW"></SU.Input>
        <SU.Text>전화번호</SU.Text>
        <SU.Input id="Tel"></SU.Input>
        <SU.Text>메일 주소</SU.Text>
        <SU.Input id="Mail"></SU.Input>
        <SU.Marketing_Agree>마케팅 정보 수신 동의</SU.Marketing_Agree>
        <SU.AgreeOption>
          <SU.AgreeBtn /> 동의
        </SU.AgreeOption>
      </SU.SUContainer>
      <SU.NextBtn onClick={GoSignUp}>다음</SU.NextBtn>
    </SU.Container>
  );
};
export default SignUp_agree;
