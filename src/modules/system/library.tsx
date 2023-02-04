import styles from './styles';

const Library = ({ setComponent }) => {
  return (
    <div style={styles.libraryList}>
      <div
        style={styles.libraryItem}
        onClick={() => setComponent('button')}
      >
        Button
      </div>
      <div
        style={styles.libraryItem}
        onClick={() => setComponent('input')}
      >
        Input
      </div>
    </div>
  );
};

export default Library;
