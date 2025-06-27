import * as M from "../styles/StyledMenu.jsx";

const MenuBox = ({ title, items }) => {
  return (
    <M.BContainer>
      <M.BTitle>{title}</M.BTitle>
      <M.BContent>
        {items.map((item, idx) => (
          <M.BoxBtn key={idx}>{item}</M.BoxBtn>
        ))}
      </M.BContent>
    </M.BContainer>
  );
};

export default MenuBox;
