const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    background: '#000',
  },
  rightHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    padding: 10,
    textDecoration: 'none',
    color: '#4BD5EE',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  linkHome: {
    padding: 10,
    textDecoration: 'none',
    fontFamily: 'SfDistantGalaxyOutline',
    color: '#FFE300',
    fontSize: 26,
    '&:hover': {
      cursor: 'pointer',
    }
  },
  exit: {
    padding: 3,
    borderRadius: 3,
    textDecoration: 'none',
    backgroundColor: '#fff',
    color: '#4BD5EE',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  active: {
    textDecoration: 'none',
  },
};

export default styles;
