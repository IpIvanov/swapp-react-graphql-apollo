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
  description: (props) => ({
    overFlow: 'hidden',
    textAlign: 'left',
    color: theme.palette[props.theme].textColor,
  }),
  card: (props) => ({
    maxHeight: 400,
    marginBottom: 20,
    borderColor: theme.palette[props.theme].Cards.borderColor,
    backgroundColor: theme.palette[props.theme].Cards.backgroundColor,
  }),
  media: {
    height: 180,
  },
  linkTo: { textDecoration: 'none' },
});

export default styles;
