const ProfileInfo = ({ info }) => {
  return (
    <table>
      <tr>
        <td>성별</td>
        <td>{info.gender}</td>
      </tr>
      <tr>
        <td>나이</td>
        <td>{info.age}</td>
      </tr>
      <tr>
        <td>거주지</td>
        <td>{info.location}</td>
      </tr>
      <tr>
        <td>직업</td>
        <td>{info.job}</td>
      </tr>
      <tr>
        <td>학력</td>
        <td>{info.status}</td>
      </tr>
      <tr>
        <td>전공</td>
        <td>{info.major}</td>
      </tr>
    </table>
  );
};

export default ProfileInfo;
