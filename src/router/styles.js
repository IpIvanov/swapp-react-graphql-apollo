const styles = (theme) => ({
  container: (props) => ({
    backgroundColor: theme.palette[props.theme].backgroundColor,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    minHeight: '100vh',
    minWidth: '100%',
    textAlign: 'center',
  }),
});

export default styles;
