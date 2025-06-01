import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB';

/*To use createContext, its advised to use a name thats applicable to what you intend on passing down. In this case, it will be the user name hence 'UserContext'*/
export const UserContext = createContext();

// ComponentA is the parent component that holds the user state and provides it to ComponentB and its children through UserContext.Provider

// useContext is a React hook that allows you to access the context value provided by the nearest UserContext.Provider in the component tree.

function ComponentA() {

    const [user, setUser] = useState("Alvin");

  return (
    <div className='box'>
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>


{/* The UserContext.Provider is used to pass the user state down to ComponentB and its children */}
        <UserContext.Provider value={user}>
            <ComponentB user={user}></ComponentB>
        </UserContext.Provider>

    </div>
  );
}

export default ComponentA;