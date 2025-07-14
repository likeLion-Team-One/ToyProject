import * as F from "../../styles/StyledFirst.jsx";
import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/`);
  };
  return (
    <F.Container onClick={goHome}>
      <img src={`${process.env.PUBLIC_URL}/image/biglogo.png`}></img>
      <div>내가 원하는 팀매칭 서비스</div>
    </F.Container>
  );
};

export default First;
