import './App.css';
import Nav from './Nav';
import Login from './login';
import { useState } from 'react';

function App() {

  const [token, setToken] = useState()

  if(!token){
    console.log(token);
    return (
      <>
      <Login setToken={setToken} />
      </>
    )
  }
  return (
    <>
    <Nav/>
    </>
  );
}

export default App;
