import React from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../../styles/Project/styleProject";
const Project = () => {
  const navigate = useNavigate();
  const GoSignUp = () => {
    navigate(`/SignUp_complete`);
  };
  return (
    <P.Container>
      <P.Header>
        <P.BackBtn
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          alt="뒤로가기"
        />
        <P.PText>프로젝트</P.PText>
        <img src={`${process.env.PUBLIC_URL}/image/Edit.svg`} />
      </P.Header>
      <P.ProjectContainer>
        <P.Search>
          <img
            src={`${process.env.PUBLIC_URL}/image/search.svg`}
            width="18px"
            height="18px"
          />
        </P.Search>
        <P.CategoryBox>
          <P.Category>전체</P.Category>
          <P.Category>조별과제</P.Category>
          <P.Category>공모전/대회</P.Category>
          <P.Category>대외활동</P.Category>
          <P.Category>기타</P.Category>
        </P.CategoryBox>
        <P.Text>3개의 게시물</P.Text>
        <P.ProjectBox>
          <P.PJImg></P.PJImg>
          <P.PJ>
            <P.PJName>[공모전] | 2025 Design De∙∙∙</P.PJName>
            <P.PJDetail>
              2025년 DesignDen 대학생 로고 디자인 공모전을 진행합니다!
            </P.PJDetail>
            <img
              src={`${process.env.PUBLIC_URL}/image/comment.svg`}
              alt="comment"
              width="17px"
              height="22px"
            />
            <img
              src={`${process.env.PUBLIC_URL}/image/scrap.svg`}
              alt="like"
              width="18px"
              height="18px"
            />
          </P.PJ>
        </P.ProjectBox>
      </P.ProjectContainer>
    </P.Container>
  );
};
export default Project;
