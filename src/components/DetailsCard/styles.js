const styles = (theme) => ({
  card: (props) => ({
    borderColor: theme.palette[props.theme].Cards.borderColor,
    backgroundColor: theme.palette[props.theme].Cards.backgroundColor,
    padding: 20,
  }),
  content: {
    padding: 0, paddingTop: 10,
  },
  description: {
    textAlign: 'left',
    marginBottom: 10,
    padding: 0,
  },
  cover: {
    width: '100%',
    height: 420,
  },
  title: (props) => ({
    color: theme.palette[props.theme].PrimaryHeading.fontColor,
    fontWeight: 700,
  }),
  detailValue: (props) => ({
    color: theme.palette[props.theme].PrimaryHeading.fontColor,
  }),
});

export default styles;
