import * as C from "../../styles/StyledCard";

const Card = ({
  header,
  image,
  bgColor,
  borderColor,
  shadowColor,
  hdColor,
  people,
  progress,
  statusText,
  statusColor,
  children,
}) => {
  return (
    <C.CardWrapper>
      <C.Card
        bgColor={bgColor}
        borderColor={borderColor}
        shadowColor={shadowColor}
        hdColor={hdColor}
      >
        <C.Header hdColor={hdColor}>{header}</C.Header>
        <C.People hdColor={hdColor}>
          <img
            src={`${process.env.PUBLIC_URL}/image/people.svg`}
            alt="logo"
            width="18px"
            style={{ marginTop: "5px" }}
          />
        </C.People>
        <C.Text hdColor={hdColor}>{people}</C.Text>
        <C.Icon>
          <img src={image} alt="Icon" />
        </C.Icon>

        {/* {progress !== undefined && (
          <>
            <C.ProgressLabel>
              진행률 <span style={{ color: "#ff4757" }}>{progress}%</span>
            </C.ProgressLabel>
            <C.ProgressBar>
              <C.ProgressFill style={{ width: `${progress}%` }} />
            </C.ProgressBar>
          </>
        )} */}
      </C.Card>
      <C.Scroll>
        <img
          src={`${process.env.PUBLIC_URL}/image/circle.svg`}
          alt="logo"
          width="30px"
          style={{ top: 0, right: 0 }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/image/right.svg`}
          alt="logo"
          width="18px"
          style={{ top: 8, right: 6 }}
        />
      </C.Scroll>
    </C.CardWrapper>
  );
};

export default Card;
