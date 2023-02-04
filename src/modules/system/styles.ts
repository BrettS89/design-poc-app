export default {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
  },
  topBar: {
    display: 'flex',
    // paddingLeft: 15,
    // paddingRight: 15,
    alignItems: 'center',
    height: 60,
    backgroundColor: '#e0e0e0',
    width: '100%',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  library: {
    width: 300,
    borderRight: '1px solid lightgray',
    padding: 15,
  },
  display: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  editor: {
    width: 300,
    borderLeft: '1px solid lightgray',
    padding: 15,
  },
  header: {
    fontWeight: 700,
    fontSize: 16,
    marginBottom: 30,
  },
  libraryList: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  libraryItem: {
    fontWeight: 700,
    color: 'gray',
    marginBottom: 10,
    cursor: 'pointer',
  },
};
