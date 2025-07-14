import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../../styles/styleProfile_edit";

const Profile_edit = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  // ✅ 거주지 드롭다운
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("선택하세요");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedLocation(option);
    setIsOpen(false);
  };

  const locations = [
    "서울특별시",
    "부산광역시",
    "인천광역시",
    "대구광역시",
    "대전광역시",
    "광주광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "충청북도",
    "충청남도",
    "전라남도",
    "경상북도",
    "경상남도",
    "강원특별자치도",
    "전북특별자치도",
    "제주특별자치도",
  ];

  return (
    <P.Container>
      <P.Header>
        <P.BackBtn
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          alt="뒤로가기"
        />
        <P.PText>프로필 수정</P.PText>
      </P.Header>

      <P.ProfileBox>
        <img
          src={`${process.env.PUBLIC_URL}/image/Profile.svg`}
          alt="Profile"
        />
      </P.ProfileBox>

      <P.EditContainer>
        <P.Text>
          이름<span style={{ color: "#E01B1B" }}>*</span>
        </P.Text>
        <P.Box />

        <P.Text>
          성별<span style={{ color: "#E01B1B" }}>*</span>
        </P.Text>
        <P.Wrapper>
          <P.GenderOption
            selected={selected === "male"}
            onClick={() => setSelected("male")}
          >
            남성
          </P.GenderOption>
          <P.GenderOption
            selected={selected === "female"}
            onClick={() => setSelected("female")}
          >
            여성
          </P.GenderOption>
        </P.Wrapper>

        <P.Text>
          거주지<span style={{ color: "#E01B1B" }}>*</span>
        </P.Text>
        <P.DropdownWrapper>
          <P.DropdownBox onClick={toggleDropdown}>
            {selectedLocation}
            <P.Arrow isOpen={isOpen}>▼</P.Arrow>
          </P.DropdownBox>

          {isOpen && (
            <P.DropdownOptions>
              {locations.map((loc) => (
                <P.DropdownOption key={loc} onClick={() => handleSelect(loc)}>
                  {loc}
                </P.DropdownOption>
              ))}
            </P.DropdownOptions>
          )}
        </P.DropdownWrapper>

        <P.Text>
          나이<span style={{ color: "#E01B1B" }}>*</span>
        </P.Text>
        <P.Box />

        <P.Text>
          직업<span style={{ color: "#E01B1B" }}>*</span>
        </P.Text>
        <P.Box />

        <P.Text>학력</P.Text>
        <P.Box />

        <P.Text>전공</P.Text>
        <P.Box />

        <P.Text>세부 설명</P.Text>
        <P.TextArea />
      </P.EditContainer>
    </P.Container>
  );
};

export default Profile_edit;
