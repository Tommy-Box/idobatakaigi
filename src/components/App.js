import React, { useState } from 'react';

import SignIn from './SignIn';

export default () => {
  const [name, setNmae] = useState('');
  console.log(name);

  return <SignIn setNmae={setName} />;
};
