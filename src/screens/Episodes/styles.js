const styles = (theme) => ({
  wrapper: {
    minWidth: '100%',
  },
  innerContainer: {
    marginTop: 50,
  },
  title: (props) => ({
    textAlign: 'left',
    color: theme.palette[props.theme].PrimaryHeading.fontColor,
    fontFamily: 'SfDistantGalaxyOutline',
    textTransform: 'none',
    fontSize: 22,
  }),
  description: {
    overFlow: 'hidden',
    textAlign: 'left',
  },
  card: {
    maxHeight: 400,
    marginBottom: 20,
  },
  media: {
    height: 180,
  },
  linkTo: { textDecoration: 'none' },
});

export default styles;
