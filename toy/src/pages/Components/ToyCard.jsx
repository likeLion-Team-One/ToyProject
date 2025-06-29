import * as C from "../../styles/StyledCard";

const Card = ({
  header,
  image,
  bgColor,
  borderColor,
  shadowColor,
  hdColor,
  people,
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
          />
        </C.People>
        <C.Text>{people}</C.Text>
        <C.Icon>
          <img src={image} alt="Icon" />
        </C.Icon>
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
