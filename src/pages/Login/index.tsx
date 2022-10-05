import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { GiConcentrationOrb } from 'react-icons/gi';

import { useAuth } from '../../contexts/AuthContext';
import toastMsg, { ToastType } from '../../utils/toastMsg';
import './styles.scss';
import { loginSchema } from './loginSchema';

const Home: React.FunctionComponent = () => {
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isAuthenticated]);

  const handleLogin = (): void => {
    setIsLoading(true);

    const promise1 = loginSchema.validate({ email, password });
    const promise2 = login({ email, password });

    Promise.all([promise1, promise2])
      .then((values) => console.log(values))
      .catch((error) => {
        const apiError = error?.response?.data;

        if (apiError?.message === 'User not found!') {
          toastMsg(ToastType.Error, 'Usuário ou senha incorretos!');
        } else {
          toastMsg(ToastType.Error, error.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Box sx={{ height: '100%', display: 'flex' }}>
      <Box
        sx={{
          height: 350,
          width: 550,
          backgroundColor: '#390B70',
          margin: 'auto',
          borderRadius: '1rem',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="icon_wrapper">
          <GiConcentrationOrb color="#7F19FC" size={36} />
          <span className="icon_title">Purplose</span>
        </div>
        <div className="login_form">
          <label htmlFor="email">
            <span className="label">E-mail</span>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu e-mail"
            />
          </label>

          <label htmlFor="senha">
            <span className="label">Senha</span>
            <input
              id="senha"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite sua senha"
            />
          </label>
        </div>
        <button disabled={isLoading || !email || !password} className="submit_btn" type="button" onClick={handleLogin}>
          Entrar
        </button>
      </Box>
    </Box>
  );
};

export default Home;
