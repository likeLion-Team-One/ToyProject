import * as T from "../../styles/StyledTemp.jsx";
import TempBox from "../Components/TempBox.jsx";

import { useNavigate } from "react-router-dom";

const initialPosts = [
  { id: 1, title: "신한 AI 아이디어톤", date: "2025.03.02" },
  { id: 2, title: "멋쟁이사자처럼 프로젝트", date: "2025.03.02" },
];

const Trash = ({ title, date }) => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(`/home`);
  };
  return (
    <T.Container>
      <T.Bar>
        <T.Back onClick={goback}>
          <img src={`${process.env.PUBLIC_URL}/image/halfX.svg`}></img>
        </T.Back>
        <div className="center">임시저장</div>
      </T.Bar>
      <T.Inform>
        <div>전체 삭제</div>
        <div>삭제</div>
      </T.Inform>
      <TempBox title={title} date={date}></TempBox>
      <TempBox title="공모전" date="25/05/30"></TempBox>
    </T.Container>
  );
};

export default Trash;
