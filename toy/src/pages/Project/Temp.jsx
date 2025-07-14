import * as T from "../../styles/StyledTemp.jsx";
import TempBox from "../Components/TempBox.jsx";
import { useNavigate } from "react-router-dom";

const Temp = ({ num, title, date }) => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(`/home`);
  };
  const goTrash = () => {
    navigate(`/trash`);
  };
  return (
    <T.Container>
      <T.Bar>
        <T.Back onClick={goback}>
          <img
            src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
            onClick={goTrash}
          ></img>
        </T.Back>
        <div className="center">임시저장</div>
      </T.Bar>
      <T.Inform>
        {num}개의 글
        <img src={`${process.env.PUBLIC_URL}/image/trashBin.svg`}></img>
      </T.Inform>
      <TempBox title={title} date={date}></TempBox>
      <TempBox title="공모전" date="25/05/30"></TempBox>
    </T.Container>
  );
};

export default Temp;
