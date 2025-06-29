import * as T from "../../styles/StyledTemp";

const Temp = ({ title, date }) => {
  return (
    <T.TempWrapper>
      <div class="title">{title}</div>
      <div class="date">{date}</div>
    </T.TempWrapper>
  );
};

export default Temp;
