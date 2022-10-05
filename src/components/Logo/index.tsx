import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiConcentrationOrb } from 'react-icons/gi';
import './styles.scss';

const Logo: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div
      className="icon_wrapper"
      tabIndex={0}
      role="button"
      onKeyUp={(event) => event.key === 'Enter' && navigate('/')}
      onClick={() => navigate('/')}
    >
      <GiConcentrationOrb color="#7F19FC" size={36} />
      <span className="icon_title">Purplose</span>
    </div>
  );
};

export default Logo;
