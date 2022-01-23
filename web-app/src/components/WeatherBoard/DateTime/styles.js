import background from '../../../assets/images/background.jpg';

const styles = () => ({
  Bold: {
    fontWeight: 700,
  },
  DateMonth: {
    fontWeight: 500,
  },
  Container: {
    position: "relative",
    paddingLeft: 20,
    color: 'white'
  },
  Card: {
    borderRadius: 10,
  },
  CardInner: {
    zIndex: 1,
    height: "300px",
  },
  Gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundImage: "var(--gradient)",
    backgroundSize: "cover",
    borderRadius: 10,
    opacity: 1,
  },
  Weekday: {
    width: "100px",
  },
  Img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    borderRadius: 10,
  }
});

export default styles;