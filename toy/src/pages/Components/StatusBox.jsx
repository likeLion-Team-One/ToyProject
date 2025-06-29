import * as S from "../../styles/StyledFindTeam";

const ProfileInfo = ({ info }) => {
  return (
    <S.StatusTable>
      <table>
        <tr>
          <td class="category">성별</td>
          <td class="content">{info.gender}</td>
        </tr>
        <tr>
          <td class="category">나이</td>
          <td class="content">{info.age}</td>
        </tr>
        <tr>
          <td class="category">거주지</td>
          <td class="content">{info.location}</td>
        </tr>
        <tr>
          <td class="category">직업</td>
          <td class="content">{info.job}</td>
        </tr>
        <tr>
          <td class="category">학력</td>
          <td class="content">{info.status}</td>
        </tr>
        <tr>
          <td class="category">전공</td>
          <td class="content">{info.major}</td>
        </tr>
      </table>
      <S.UserIntro>
        <div>{info.intro}</div>
      </S.UserIntro>
    </S.StatusTable>
  );
};

export default ProfileInfo;
