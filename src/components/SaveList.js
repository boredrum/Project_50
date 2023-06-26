import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SaveList = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state)=> state.coffee.isLoggedIn);
  const coffeeStore = useSelector((state)=> state.coffee.coffee);
  const sugarStore = useSelector((state) => state.sugar.sugar);

  const saveLocal = () =>{
    localStorage.setItem('coffee', coffeeStore);
    localStorage.setItem('sugar', sugarStore);
  }

  const removeLocal = () =>{
    localStorage.removeItem('coffee');
    localStorage.removeItem('sugar');
    dispatchFunc({type: 'resetCoffeeCalc'});
    dispatchFunc({type: 'resetSugarCalc'});
  }

  return (
    <div className='save'>
      {!isLoggedIn ? (
          <p>You must be logged in to save the list.</p>
      ):(
        <div>
          <button onClick={saveLocal}>SAVE</button>
          <button onClick={removeLocal}>CLEAR</button>
        </div>
      )}
    </div>
  )
}

export default SaveList