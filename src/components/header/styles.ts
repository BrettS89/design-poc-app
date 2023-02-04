const styles = {
  appBar: {
    height: 80
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase' as const,
    color: '#fff',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 80,
    paddingLeft: 30,
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
