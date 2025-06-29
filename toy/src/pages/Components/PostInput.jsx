import * as P from "../../styles/StyledPost";
import React, { useState, useEffect } from "react";

const PostInput = ({ title, height, Theight, hint }) => {
  return (
    <P.IWrapper>
      <P.ITitle>{title}</P.ITitle>
      <P.IContent height={height} Theight={Theight}>
        <textarea placeholder={hint}></textarea>
      </P.IContent>
    </P.IWrapper>
  );
};

const PostSelect = ({
  title,
  height,
  Theight,
  width,
  Uwidth,
  options = [],
}) => {
  const [currentValue, setCurrentValue] = useState("선택 안함");
  const [showOptions, setShowOptions] = useState("");

  const handleSelectOption = (opt) => {
    setCurrentValue(opt);
    setShowOptions(false);
  };

  const handleToggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <P.IWrapper>
      <P.ITitle>{title}</P.ITitle>
      <P.IContent height={height} Theight={Theight} width={width}>
        <ul Uwidth={Uwidth}>
          {options.map((opt, idx) => (
            <li key={idx}>{opt}</li>
          ))}
        </ul>
        <image src={`${process.env.PUBLIC_URL}/image/list.svg`} />
      </P.IContent>
    </P.IWrapper>
  );
};

const PostDate = ({ title, type, width, Twidth }) => {
  return (
    <P.IWrapper>
      <P.ITitle>{title}</P.ITitle>
      <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        {type.map((t, idx) => (
          <div key={idx}>
            <P.IType>{t}</P.IType>
            <P.IContent width={width} Twidth={Twidth}>
              <input placeholder="YY/MM/DD"></input>
            </P.IContent>
          </div>
        ))}
      </div>
    </P.IWrapper>
  );
};

export default PostInput;
export { PostSelect, PostDate };
