import * as M from "../../styles/StyledMenu.jsx";

const MenuBox = ({ title, items, onClick }) => {
  return (
    <M.BContainer>
      <M.BTitle>{title}</M.BTitle>
      <M.BContent>
        {items.map((item, idx) => (
          <M.BoxBtn key={idx} onClick={() => onClick(item.path)}>
            {item.label}
          </M.BoxBtn>
        ))}
      </M.BContent>
    </M.BContainer>
  );
};

export default MenuBox;
