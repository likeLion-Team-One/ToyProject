import * as F from "../../styles/StyledFindTeam.jsx";
import Profile from "../../pages/Components/Profile.jsx";
import BottomNav from "../Components/BottomNav.jsx";
import { useNavigate } from "react-router-dom";

const people = [
  {
    id: 1,
    info: {
      name: "이동덕",
      age: "만 24세",
      location: "서울특별시 성북구",
      job: "대학생(학부)",
      status: "동덕여자대학교 3학년 재학",
      major: "커뮤니케이션콘텐츠전공",
      intro: "안녕하세요, 현재 광고 AE를 진로로 삼고 있는 이동덕이라고 합니다.",
    },
  },
  {
    id: 2,
    info: {
      name: "김동덕",
      age: "만 24세",
      location: "서울특별시 성북구",
      job: "대학생(학부)",
      status: "동덕여자대학교 3학년 재학",
      major: "커뮤니케이션콘텐츠전공",
    },
  },
];

const Find = ({ num }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/home`);
  };
  const goDetail = (person) => {
    console.log("전달되는 데이터:", person);
    navigate(`/detail`, { state: { person } });
  };
  return (
    <F.Container>
      <F.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          onClick={goHome}
        />
        <div className="center">팀원 찾기</div>
        <img
          src={`${process.env.PUBLIC_URL}/image/heart.svg`}
          style={{ width: "26px" }}
        />
      </F.Bar>
      <F.LogBox>
        <F.Search>
          <input></input>
          <img
            src={`${process.env.PUBLIC_URL}/image/search.svg`}
            alt="search"
          />
        </F.Search>
        <F.Inform>{num}명의 팀원</F.Inform>
        <F.ProfileWrapper>
          {people.map((person) => (
            <Profile
              key={person.id}
              name={person.info.name}
              status={person.info.status}
              onClick={() => goDetail(person)}
            />
          ))}
        </F.ProfileWrapper>
      </F.LogBox>
      <BottomNav idx={1}></BottomNav>
    </F.Container>
  );
};

export default Find;
