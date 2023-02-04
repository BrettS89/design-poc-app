export default {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
    padding: 30,
    backgroundColor: '#f1f1f1',
  },
  header: {
    marginBottom: 30,
    marginTop: 15,
  },
  systemsList: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    columnGap: 30,
    rowGap: 30,
  },
  systemCard: {
    display: 'flex',
    flexDirection: 'column' as const,
    padding: 15,
    border: '1px solid lightgray',
    height: 300,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    cursor: 'pointer',
  },
  cardName: {
    color: '#60a3ff',
    marginBottom: 0,
  },
  cardDescription: {
    fontSize: 18,
    // color: '#2e2d2d',
    lineHeight: 1.4,
  },
  createNew: {
    cursor: 'pointer',
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    border: '1px solid lightgray',
    height: 300,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
  }
};
