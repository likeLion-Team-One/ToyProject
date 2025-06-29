import * as P from "../styles/StyledPost.jsx";
import PostInput, { PostDate, PostSelect } from "./Components/PostInput.jsx";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const ProjectType = ["조별과제", "공모전/대회", "대외활동", "기타"];
  const DateType = ["시작", "마감"];
  const navigate = useNavigate();

  const goProject = () => {
    navigate(`/projext`);
  };

  const goTemp = () => {
    navigate(`/temp`);
  };

  return (
    <P.Container>
      <P.Bar>
        <P.DeleteBtn>
          <img src={`${process.env.PUBLIC_URL}/image/delete.svg`} />
        </P.DeleteBtn>
        <P.Title>글쓰기</P.Title>
        <P.Temp onClick={goTemp}>임시 저장</P.Temp>
      </P.Bar>
      <PostInput title="제목"></PostInput>
      <PostSelect title="프로젝트 유형"></PostSelect>
      <PostInput
        title="프로젝트 분야"
        options={ProjectType}
        Uwidth="330px"
      ></PostInput>
      <PostInput title="프로젝트 대상"></PostInput>
      <PostDate
        title="기간"
        type={DateType}
        width="160px"
        Twidth=" 140px"
      ></PostDate>
      <PostInput title="주체기관" hint="기관/단체/관리자명"></PostInput>
      <PostInput title="세부설명" height="170px" Theight="140px"></PostInput>
      <P.rowScroll>
        <P.PictureBox>
          <img src={`${process.env.PUBLIC_URL}/image/camera.svg`} />
        </P.PictureBox>
      </P.rowScroll>
    </P.Container>
  );
};

export default Post;
