import Layout from './Layout/Layout';
import PageContext from './PageContext';
import { useState } from 'react';

const Page = () => {
  // Note : tried using a js variable to store logIn value, but react did not listent to it,
  // hence i used a state.
  const [isLoggedIn, setLoggedIn] = useState(false);
  const toggleSignIn = () => {
    setLoggedIn((prevLoggedInState) => !prevLoggedInState);
  }

  return (
    <PageContext.Provider value={{ isLoggedIn }}>
      <button onClick={toggleSignIn}>Sign In</button>
      <Layout/>
    </PageContext.Provider>
  )
}

export default Page;