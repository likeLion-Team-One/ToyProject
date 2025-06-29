import React from "react";
import { useState } from "react";
import * as N from "../../styles/StyledBottomNav";
import { ReactComponent as HomeIcon } from "../../image/Navigate/Home.svg";
import { ReactComponent as ProjectIcon } from "../../image/Navigate/Project.svg";
import { ReactComponent as FindIcon } from "../../image/Navigate/Search.svg";
import { ReactComponent as GroupIcon } from "../../image/Navigate/Group.svg";
import { ReactComponent as MyIcon } from "../../image/Navigate/My.svg";
import { ReactComponent as CheckHomeIcon } from "../../image/Navigate/CheckHome.svg";
import { ReactComponent as CheckProjectIcon } from "../../image/Navigate/CheckProject.svg";
import { ReactComponent as CheckFindIcon } from "../../image/Navigate/CheckSearch.svg";
import { ReactComponent as CheckGroupIcon } from "../../image/Navigate/CheckGroup.svg";
import { ReactComponent as CheckMyIcon } from "../../image/Navigate/CheckMy.svg";
import { useNavigate } from "react-router-dom";

const Menu = [
  {
    label: "프로젝트",
    Icon: ProjectIcon,
    ActiveIcon: CheckProjectIcon,
    path: "/project",
  },
  {
    label: "팀원찾기",
    Icon: FindIcon,
    ActiveIcon: CheckFindIcon,
    path: "/find",
  },
  { label: "홈", Icon: HomeIcon, ActiveIcon: CheckHomeIcon, path: "/home" },
  {
    label: "그룹",
    Icon: GroupIcon,
    ActiveIcon: CheckGroupIcon,
    path: "/group",
  },
  { label: "마이", Icon: MyIcon, ActiveIcon: CheckMyIcon, path: "/profile" },
];

const ACTIVE_COLOR = "#3366ff"; // 선택된 메뉴 색상
const DEFAULT_COLOR = "#bdbdbd"; // 비활성 메뉴 색상

const BottomNav = ({ idx = 0 }) => {
  const [selected, setSelected] = useState(idx);

  const navigate = useNavigate();

  return (
    <N.Nav>
      {Menu.map(({ label, Icon, ActiveIcon, path }, i) => (
        <button
          key={label}
          onClick={() => {
            setSelected(i);
            navigate(path);
          }}
          style={{
            background: "none",
            border: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            flex: 1,
          }}
        >
          {selected === i ? (
            <ActiveIcon width={24} height={24} />
          ) : (
            <Icon width={24} height={24} />
          )}
          <span
            style={{
              color: selected === i ? ACTIVE_COLOR : DEFAULT_COLOR,
              fontWeight: selected === i ? "bold" : "normal",
              fontSize: "12px",
              fontFamily: "SUIT",
            }}
          >
            {label}
          </span>
        </button>
      ))}
    </N.Nav>
  );
};

export default BottomNav;
