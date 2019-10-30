const styles = (theme) => ({
  container: (props) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    border: `1px soldi ${theme.palette[props.theme].AppBar.borderColor}`,
    background: theme.palette[props.theme].AppBar.backgroundColor,
  }),
  rightHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  link: (props) => ({
    padding: 10,
    textDecoration: 'none',
    color: theme.palette[props.theme].AppBar.fontColor,
    '&:hover': {
      cursor: 'pointer',
    },
  }),
  linkHome: {
    padding: 10,
    textDecoration: 'none',
    fontFamily: 'SfDistantGalaxyOutline',
    color: theme.palette.commonColors.yellow,
    fontSize: 26,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  exit: (props) => ({
    padding: 3,
    borderRadius: 3,
    textDecoration: 'none',
    backgroundColor: '#fff',
    color: theme.palette[props.theme].AppBar.fontColor,
    '&:hover': {
      cursor: 'pointer',
    },
  }),
  active: {
    textDecoration: 'none',
  },
});

export default styles;
