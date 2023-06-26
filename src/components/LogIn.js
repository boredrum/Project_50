import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const LogIn = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state)=> state.coffee.isLoggedIn);
  const handleLogIn = (e) => {
    e.preventDefault();
    dispatchFunc({ type: 'logIn' });
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatchFunc({ type: 'logOut' });
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleLogIn}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" />
          <button type="submit">Log in</button>
        </form>
      ) : (
        <div>
          <button className="logout" type="submit" onClick={handleLogOut}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default LogIn