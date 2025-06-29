import * as G from "../../styles/StyledCard";

const Group = ({ title, content }) => {
  return (
    <G.Box>
      <G.BTitle>{title}</G.BTitle>
      <G.BContent>{content}</G.BContent>
      <G.BoxBtn>스크랩</G.BoxBtn>
    </G.Box>
  );
};

export default Group;
