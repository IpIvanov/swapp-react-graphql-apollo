const styles = (theme) => ({
  mainTitle: {
    fontFamily: 'SfDistantGalaxyOutline',
    color: theme.palette.commonColors.yellow,
    fontSize: 150,
  },
  error: { color: 'red' },
  loginButton: (props) => ({
    textTransform: 'none',
    borderColor: theme.palette[props.theme].SolidButtons.borderColor,
    backgroundColor: theme.palette[props.theme].SolidButtons.backgroundColor,
    color: theme.palette[props.theme].SolidButtons.fontColor,
    fontSize: 36,
    fontWeight: 900,
  }),
  textField: (props) => ({
    borderColor: theme.palette[props.theme].Inputs.borderColor,
    backgroundColor: theme.palette[props.theme].Inputs.backgroundColor,
  }),
  input: (props) => ({
    color: theme.palette[props.theme].Inputs.fontColor,
  }),
});

export default styles;
