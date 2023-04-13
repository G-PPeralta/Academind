import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';


function App() {
  const isLogged = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isLogged ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
