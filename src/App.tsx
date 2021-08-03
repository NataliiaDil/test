import React, { useState } from 'react';

import './App.css';
import FullNameResult from './FullNameResult';
import FullNameForm from './FullNameForm';

export interface FullName {
  firstName: string;
  lastName: string;
}

const App: React.FC = () => {
  const [fullName, setFullName] = useState<FullName>({
    firstName: '',
    lastName: '',
  });
  const [isResultShown, setIsResultShown] = useState<boolean>(false);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFullName((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
    setIsResultShown(false);
  };

  const handleSubmit = (): void => {
    setIsResultShown(true);
  };

  return (
    <div className="App">
      <FullNameForm onChange={handleChangeInput} fullName={fullName} onSubmit={handleSubmit} />

      <FullNameResult fullName={fullName} isResultShown={isResultShown} />
    </div>
  );
};

export default App;
