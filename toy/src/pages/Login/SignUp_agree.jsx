import React from "react";
import { useNavigate } from "react-router-dom";
import * as SU from "../../styles/styleSignUp_agree";

const SignUp_agree = () => {
  const navigate = useNavigate();
  const BackBtn = () => {
    navigate(`/LogIn`);
  };
  const GoSignUp = () => {
    navigate(`/SignUp`);
  };
  return (
    <SU.Container>
      <SU.Header>
        <SU.BackBtn
          onClick={BackBtn}
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
        STEP 01
        <br />
        약관 동의하기
      </SU.Step>
      <SU.Text>1. 목적 및 이용 계약 체결</SU.Text>
      <SU.TermBox>
        <SU.TermContent>
          이 약관은 팀 매칭 서비스 Tingle(팅글) 의 이용과 관련하여, 이용자가
          서비스에 회원으로 가입하고, 회사가 이를 승인함으로써 체결되는
          이용계약의 조건을 정합니다. 가입자는 본 약관에 동의함으로써 팀원 매칭,
          커뮤니티, 프로젝트 생성 등 팅글이 제공하는 모든 기능을 사용할 수 있는
          권한을 부여받습니다.
        </SU.TermContent>
      </SU.TermBox>
      <SU.TermBtnGroup>
        <SU.TermOption>
          <SU.TermBtn /> 동의
        </SU.TermOption>
        <SU.TermOption>
          <SU.TermBtn /> 비동의
        </SU.TermOption>
      </SU.TermBtnGroup>
      <SU.Text>2. 약관 제목</SU.Text>
      <SU.TermBox>
        <SU.TermContent>
          회원은 자신의 정보를 정확히 기입하고, 개인정보 변경 시 이를 즉시
          수정해야 하며, 법령 및 서비스 운영정책을 준수해야 합니다. 회사는
          다음과 같은 경우, 서비스 이용을 제한하거나 회원 자격을 박탈할 수
          있습니다. 타인의 정보를 도용하거나 허위로 가입한 경우 서비스 운영을
          방해하거나 불법 행위를 한 경우 회원의 개인정보는 관련 법령에 따라
          안전하게 관리되며, 자세한 사항은 개인정보처리방침에 따릅니다. 회사는
          시스템 점검, 기술적 문제, 법적 사유 등으로 서비스 제공을 일시 중단할
          수 있으며, 이에 대해 사전 또는 사후 공지합니다.
        </SU.TermContent>
      </SU.TermBox>
      <SU.TermBtnGroup>
        <SU.TermOption>
          <SU.TermBtn /> 동의
        </SU.TermOption>
        <SU.TermOption>
          <SU.TermBtn /> 비동의
        </SU.TermOption>
      </SU.TermBtnGroup>
      <SU.AgreeAll>전체 동의</SU.AgreeAll>
      <SU.NextBtn onClick={GoSignUp}>다음</SU.NextBtn>
    </SU.Container>
  );
};
export default SignUp_agree;
