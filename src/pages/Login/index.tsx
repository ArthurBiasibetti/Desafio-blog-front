import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import toastMsg, { ToastType } from '../../utils/toastMsg';
import Section from '../../components/Section';
import Text from '../../components/Text';

const Home: React.FunctionComponent = () => {
  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isAuthenticated]);

  useEffect(() => {
    login({ email: 'admin@gmail.com', password: '123' })
      .then((data) => {
        if (data) {
          navigate('/');
        }
      })
      .catch((error) => {
        toastMsg(ToastType.Error, error.message || 'Internal Server Error!');
      });
  }, []);

  return (
    <Section className="home" title="Página inicial" description="Página inicial">
      <Row>
        <Col md={12}>
          <Text as="h1" size="2rem" weight={700}>
            Página inicial
          </Text>
          <Text as="small" size=".85rem" weight={400}>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
          </Text>
        </Col>
      </Row>
    </Section>
  );
};

export default Home;
