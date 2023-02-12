const styles = {
  appBar: {
    height: 70
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase' as const,
    color: '#fff',
    fontWeight: 800,
    fontSize: 22,
    letterSpacing: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 70,
    paddingLeft: 15,
  },
  leftItems: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  rightItems: {
    display: 'flex',
    alignItems: 'center',
  },
  subLogo: {
    marginLeft: 10,
    fontStyle: 'italic',
  },
  link: {
    color: '#fff',
    marginLeft: 30,
    cursor: 'pointer',
  },
};

export default styles;
