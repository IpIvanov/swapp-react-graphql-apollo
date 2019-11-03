const styles = (theme) => ({
  wrapper: {
    minWidth: '100%',
  },
  container: {
    marginTop: 50,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  description: {
    textAlign: 'left',
    marginBottom: 10,
  },
  movieCover: {
    width: 300,
    height: 300,
  },
  name: (props) => ({
    color: theme.palette[props.theme].PrimaryHeading.fontColor,
    fontFamily: 'SfDistantGalaxyOutline',
    textTransform: 'none',
    fontSize: 22,
  }),
  textColor: (props) => ({ color: theme.palette[props.theme].PrimaryHeading.fontColor }),
});

export default styles;
