import React from 'react';

import './FullNameForm.css';
import { FullName } from 'App';

interface FullNameFormProps {
  onSubmit: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fullName: FullName;
}

const FullNameForm: React.FC<FullNameFormProps> = ({ onSubmit, onChange, fullName }) => {
  const { firstName, lastName } = fullName;

  return (
    <div className="FullNameForm">
      <input name="firstName" type="text" value={firstName} onChange={onChange} />
      <input name="lastName" type="text" value={lastName} onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default FullNameForm;
