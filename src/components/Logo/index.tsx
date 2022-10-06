import React from 'react';
import { GiConcentrationOrb } from 'react-icons/gi';
import './styles.scss';

const Logo: React.FunctionComponent = () => (
  <div className="icon_wrapper">
    <GiConcentrationOrb color="#7F19FC" size={36} />
    <span className="icon_title">Purplose</span>
  </div>
);

export default Logo;
