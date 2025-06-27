import * as F from "../styles/StyledFirst.jsx";
import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/`);
  };
  return <F.Container onClick={goHome}></F.Container>;
};

export default First;
