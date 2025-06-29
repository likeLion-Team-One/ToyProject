import * as P from "../../styles/StyledPost";
import React, { useState, useEffect, useRef } from "react";

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
  value,
  onChange,
  error,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <P.IWrapper>
      <P.ITitle>{title}</P.ITitle>
      <P.IContent
        height={height}
        Theight={Theight}
        width={width}
        onClick={() => setShowOptions(!showOptions)}
        ref={dropdownRef}
        className={`${error ? "error" : ""} ${showOptions ? "active" : ""}`}
        style={{ cursor: "pointer", position: "relative" }}
      >
        <div className="selected-value">{value || "선택 안함"}</div>
        <img
          src={`${process.env.PUBLIC_URL}/image/list.svg`}
          alt="dropdown"
          style={{
            position: "absolute",
            right: "15px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        {showOptions && (
          <P.DropdownOptions Uwidth={Uwidth}>
            {options.map((opt, idx) => (
              <P.DropdownOption
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(opt);
                  setShowOptions(false);
                }}
                className={value === opt ? "selected" : ""}
              >
                {opt}
              </P.DropdownOption>
            ))}
          </P.DropdownOptions>
        )}
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
