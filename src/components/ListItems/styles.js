const styles = (theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    width: 100,
    height: 120,
  },
  name: (props) => ({
    color: theme.palette[props.theme].PrimaryHeading.fontColor,
    fontFamily: 'SfDistantGalaxyOutline',
    textTransform: 'none',
    fontSize: 22,
  }),
  button: (props) => ({
    textTransform: 'none',
    backgroundColor: theme.palette[props.theme].OutlineButtons.backgroundColor,
    borderColor: theme.palette[props.theme].OutlineButtons.borderColor,
    color: theme.palette[props.theme].OutlineButtons.fontColor,
    fontSize: 20,
    fontWeight: 900,
  }),
  linkTo: {
    textDecoration: 'none',
  },
});

export default styles;
