import { useNavigate } from 'react-router-dom';
import styles from './styles';

const SystemCard = ({ designSystem }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.systemCard} onClick={() => navigate(`/system/${designSystem._id}`)}>
      <h2 style={styles.cardName}>{designSystem.name}</h2>
      <p style={styles.cardDescription}>{designSystem.description}</p>
    </div>
  );
};

export default SystemCard;
