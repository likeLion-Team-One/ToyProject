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
          src={`${process.env.PUBLIC_URL}/images/BackBtn.svg`}
          alt="뒤로가기"
        />
        <G.PText>그룹</G.PText>
      </G.Header>
      <G.SearchBar>
        <img
          src={`${process.env.PUBLIC_URL}/images/Lens.svg`}
          alt="lens"
          width="18px"
          height="18px"
        ></img>
      </G.SearchBar>
      <G.GroupContainer>
        <G.TabMenu>
          <G.Tab active>탐색</G.Tab>
          <G.Tab>내 그룹</G.Tab>
        </G.TabMenu>

        <G.GroupCount>
          6개의 그룹
          <G.FilterIcon
            src={`${process.env.PUBLIC_URL}/images/Filter.svg`}
            alt="filter"
          ></G.FilterIcon>
        </G.GroupCount>

        <G.GroupList>
          <G.GroupCard>
            <G.GroupThumbnail
              src={`${process.env.PUBLIC_URL}/images/GroupProfile.svg`}
            />
            <G.GroupInfo>
              <G.GroupTitle>
                제아페 1팀
                <G.MemberCount>2/4</G.MemberCount>
              </G.GroupTitle>
              <G.GroupTags>#공모전 #광고</G.GroupTags>
              <G.GroupBottom>
                <G.Comment
                  src={`${process.env.PUBLIC_URL}/images/PJ_Comment.svg`}
                />
                <G.Like src={`${process.env.PUBLIC_URL}/images/PJ_Like.svg`} />
                <G.RequestButton>팀원 요청</G.RequestButton>
              </G.GroupBottom>
            </G.GroupInfo>
          </G.GroupCard>
        </G.GroupList>
        <G.FloatingAdd>+</G.FloatingAdd>
      </G.GroupContainer>
    </G.Container>
  );
};
export default Group;
