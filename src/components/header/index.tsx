import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import BaseAppBar from '@mui/material/AppBar';
import styles from './styles';

const AppBar = styled(BaseAppBar)(styles.appBar)
const LeftContent = styled('div')(styles.leftItems)
const RightContent = styled('div')(styles.rightItems);
const Logo = styled('h2')(styles.logo);
const Link = styled('span')(styles.link);

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar elevation={0} color="primary">
      <div style={styles.toolbar}>
        <LeftContent onClick={() => navigate('/')}>
          <Logo>
            Design Platform - Proof of concept
          </Logo>
        </LeftContent>

        <RightContent>
        </RightContent>
        
      </div>
    </AppBar>
  );
};

export default Header