import React from 'react';

import './FullNameResult.css';
import { FullName } from 'App';

interface FullNameResultProps {
  fullName: FullName;
  isResultShown: boolean;
}

const FullNameResult: React.FC<FullNameResultProps> = ({ fullName, isResultShown }) => {
  const { firstName, lastName } = fullName;

  if (!isResultShown) return null;

  return <div className="FullNameResult">{`${firstName} ${lastName}`}</div>;
};

export default FullNameResult;
