import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import { useAuth } from '../../contexts/AuthContext';
import './styles.scss';

const Header: React.FunctionComponent = () => {
  const { logout, isAuthenticated, loggedUser } = useAuth();
  const navigate = useNavigate();
  return (
    <Box
      component="header"
      sx={{
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#3A0A69',
        padding: '0 1rem',
        width: '100%',
        position: 'sticky',
        top: 0,
      }}
    >
      <div className="paginas">
        <Logo />
        <span
          tabIndex={0}
          onKeyUp={(event) => event.key === 'Enter' && navigate('/')}
          role="button"
          onClick={() => navigate('/')}
        >
          Posts
        </span>

        {isAuthenticated && (
          <span
            tabIndex={0}
            onKeyUp={(event) => event.key === 'Enter' && navigate('/')}
            role="button"
            onClick={() => navigate('/myPosts')}
          >
            Meus posts
          </span>
        )}
      </div>

      <div className="actions">
        {!isAuthenticated && (
          <>
            <span
              tabIndex={0}
              onKeyUp={(event) => event.key === 'Enter' && navigate('/login')}
              role="button"
              onClick={() => navigate('/login')}
            >
              Entrar
            </span>
            <span> | </span>
            <span
              tabIndex={0}
              onKeyUp={(event) => event.key === 'Enter' && navigate('/register')}
              role="button"
              onClick={() => navigate('/register')}
            >
              Registrar-me
            </span>
          </>
        )}
        {isAuthenticated && (
          <>
            <span>{loggedUser.name} | </span>
            <span
              tabIndex={0}
              role="button"
              onClick={() => logout()}
              onKeyUp={(event) => event.key === 'Enter' && logout()}
            >
              Sair
            </span>
          </>
        )}
      </div>
    </Box>
  );
};

export default Header;
