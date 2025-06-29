import * as F from "../styles/StyledFindTeam.jsx";
import { useNavigate } from "react-router-dom";
import StatusBox from "../pages/Components/StatusBox.jsx";
import { useLocation } from "react-router-dom";

const Detail = ({ person }) => {
  // const location = useLocation();
  // const person = location.state?.person;

  return (
    <F.Container>
      <F.Bar>
        <img src={`${process.env.PUBLIC_URL}/image/halfX.svg`} />
        <div className="center">팀원 정보</div>
      </F.Bar>
      <F.LogBox>
        <img
          className="picture"
          src={`${process.env.PUBLIC_URL}/image/profile.png`}
        />
        <F.ProfileInform>
          <F.ProfileNameBig>{person.info.name}</F.ProfileNameBig>
          <F.AddBtnSmall style={{ width: "69px" }}>그룹 추가</F.AddBtnSmall>
          <StatusBox info={person.info}></StatusBox>
        </F.ProfileInform>
      </F.LogBox>
    </F.Container>
  );
};

export default Detail;
