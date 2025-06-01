import React, {useContext} from 'react';
import { UserContext } from './ComponentA.jsx';
import ComponentD from './ComponentD';

function MyComponentC() {

  const user = useContext(UserContext);

  return (
    <div className='box'>
      <h1>Component C</h1>
      <h2>{`Hello ${user}`}</h2>

      <ComponentD></ComponentD>
    </div>
  );
}

export default MyComponentC;