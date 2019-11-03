const styles = (theme) => ({
  wrapper: {
    minWidth: '100%',
  },
  container: {
    marginTop: 50,
  },
  name: (props) => ({
    color: theme.palette[props.theme].PrimaryHeading.fontColor,
    fontFamily: 'SfDistantGalaxyOutline',
    fontSize: 36,
  }),
  starshipsTitle: {
    fontFamily: 'SfDistantGalaxyOutline',
    fontSize: 36,
  },
  divider: { marginBottom: 20 },
});

export default styles;
