import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { registerSchema } from './registerSchema';
import toastMsg, { ToastType } from '../../utils/toastMsg';
import UsersService from '../../services/user.service';
import './styles.scss';
import Logo from '../../components/Logo';
import Header from '../../components/Header';

const Home: React.FunctionComponent = () => {
  const { isAuthenticated } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isDisableSubmitBtn = !name || !email || !password || !rePassword;

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isAuthenticated]);

  const handleRegister = (): void => {
    setIsLoading(true);

    const promise1 = registerSchema.validate({ name, email, password, rePassword });
    const promise2 = new Promise((resolve, reject) => {
      if (password !== rePassword) {
        reject(new Error('Senha e confirmar senha não são iguais'));
      }

      resolve(true);
    });
    const promise3 = UsersService.create({ name, password, email });

    Promise.all([promise1, promise2, promise3])
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        const apiError = error?.response?.data;

        if (apiError?.message === 'Email alredy exist!') {
          toastMsg(ToastType.Error, 'Esse e-mail já está sendo usado');
        } else {
          toastMsg(ToastType.Error, error.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Header />
      <Box sx={{ height: '100%', display: 'flex' }}>
        <Box
          sx={{
            height: 500,
            width: 400,
            backgroundColor: '#390B70',
            margin: 'auto',
            borderRadius: '1rem',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Logo />
          <div className="register_form">
            <label htmlFor="name">
              <span className="label">Nome de usuário</span>
              <input
                id="name"
                type="text"
                max={120}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Digite seu Nome"
              />
            </label>
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
            <label htmlFor="resenha">
              <span className="label">Confirmar a senha</span>
              <input
                id="resenha"
                type="password"
                value={rePassword}
                onChange={(event) => setRePassword(event.target.value)}
                placeholder="Digite sua senha novamente"
              />
            </label>
          </div>
          <button
            disabled={isLoading || isDisableSubmitBtn}
            className="submit_btn"
            type="button"
            onClick={handleRegister}
          >
            Registrar-me
          </button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
