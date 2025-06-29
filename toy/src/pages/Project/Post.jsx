import * as P from "../../styles/StyledPost.jsx";
import PostInput, { PostDate, PostSelect } from "../Components/PostInput.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const Post = () => {
  const ProjectUnit = ["조별과제", "공모전/대회", "대외활동", "기타"];
  const ProjectType = ["기획", "마케팅", "과학/공학", "예체능", "기타"];
  const DateType = ["시작", "마감"];
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    projectUnit: "",
    projectType: "",
    projectTarget: "",
    startDate: "",
    endDate: "",
    organization: "",
    description: "",
  });
  // 폼 상태 저장

  const [errors, setErrors] = useState({});
  // 에러 상태 저장

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setModalOpen(false);
  };

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
          <img
            src={`${process.env.PUBLIC_URL}/image/delete.svg`}
            onClick={() => setModalOpen(true)}
          />
        </P.DeleteBtn>
        <P.Title>글쓰기</P.Title>
        <P.Temp onClick={goTemp}>임시 저장</P.Temp>
      </P.Bar>
      <P.Scroll>
        <PostInput title="제목 *"></PostInput>
        <PostSelect
          title="프로젝트 유형 *"
          options={ProjectUnit}
          value={formData.projectUnit}
          Uwidth="330px"
          onChange={(val) => handleInputChange("projectUnit", val)}
        ></PostSelect>
        <PostSelect
          title="프로젝트 분야 *"
          options={ProjectType}
          value={formData.projectType}
          Uwidth="330px"
          onChange={(val) => handleInputChange("projectType", val)}
        />
        <PostInput title="프로젝트 대상 *"></PostInput>
        <PostDate
          title="기간 *"
          type={DateType}
          width="160px"
          Twidth=" 140px"
        ></PostDate>
        <PostInput title="주체기관 *" hint="기관/단체/관리자명"></PostInput>
        <PostInput title="세부설명" height="170px" Theight="140px"></PostInput>
        <P.rowScroll>
          <P.PictureBox className="main">
            <img
              src={`${process.env.PUBLIC_URL}/image/camera.svg`}
              width="32px"
            />
            4 / 10
          </P.PictureBox>
          <P.PictureBox className="picture"></P.PictureBox>
        </P.rowScroll>
      </P.Scroll>
      <P.AddBtn>게시물 등록</P.AddBtn>
      {modalOpen && (
        <P.ModalBackdrop
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <P.ModalBox>
            작성 중인 글을 저장할까요?
            <P.ModalButtonRow>
              <P.ModalButton onClick={handleSave}>저장</P.ModalButton>
              <P.ModalButton onClick={() => setModalOpen(false)}>
                취소
              </P.ModalButton>
            </P.ModalButtonRow>
          </P.ModalBox>
        </P.ModalBackdrop>
      )}
    </P.Container>
  );
};

export default Post;
