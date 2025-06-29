import * as F from "../../styles/StyledFindTeam.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import StatusBox from "../Components/StatusBox.jsx";
import { ReactComponent as Heart } from "../../image/heart.svg";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const person = location.state?.person;

  const goback = () => {
    navigate(`/find`);
  };

  const goAdd = (e) => {
    e.stopPropagation(); // 상위 onClick 방지!
    navigate(`/addgroup`);
  };

  return (
    <F.Container>
      <F.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          onClick={goback}
        />
        <div className="center">팀원 정보</div>
      </F.Bar>
      <F.LogBox>
        <img
          className="picture"
          src={`${process.env.PUBLIC_URL}/image/profile.png`}
        />
        <Heart
          style={{
            zIndex: "10",
            position: "absolute",
            right: "17",
            top: "120",
          }}
        ></Heart>
        <F.ProfileInform>
          <F.ProfileNameBig>{person.info.name}</F.ProfileNameBig>
          <F.AddBtnSmall style={{ width: "69px" }} onClick={goAdd}>
            그룹 추가
          </F.AddBtnSmall>
          <StatusBox info={person.info}></StatusBox>
        </F.ProfileInform>
      </F.LogBox>
    </F.Container>
  );
};

export default Detail;
