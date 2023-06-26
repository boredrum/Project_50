import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {

  const coffee = useSelector((state) => state.coffee.coffee)
  const sugar = useSelector((state) => state.sugar.sugar)

  const isLoggedIn = useSelector((state) => state.coffee.isLoggedIn)

  const dispatchFunc = useDispatch();

  useEffect(()=>{
    const storedCoffee = localStorage.getItem("coffee");
    const storedSugar = localStorage.getItem("sugar");

    if (storedCoffee){
      dispatchFunc({type: "setCoffee"})
    }
    
    if (storedSugar){
      dispatchFunc({type: "setSugar"})
    }
  }, [dispatchFunc])

  const incrementCoffee = () => {
    dispatchFunc({ type: 'incrementCoffee' })
  }
  const decrementCoffee = () => {
    dispatchFunc({ type: 'decrementCoffee' })
  }
  
  const incrementSugar = () => {
    dispatchFunc({ type: 'incrementSugar' })
  }
  const decrementSugar = () => {
    dispatchFunc({ type: 'decrementSugar' })
  }


  const increaseCoffee = () => {
    dispatchFunc({ type: 'increaseCoffee', number: 10 })
  }
  
  const increaseSugar = () => {
    dispatchFunc({ type: 'increaseSugar', number: 10 })
  }

  return (
    <>
      <div className='product'>
        <span>{`Coffee: ${coffee}`}</span>
        <button onClick={incrementCoffee}>+</button>
        <button onClick={decrementCoffee}>-</button>
        {isLoggedIn && <button onClick={increaseCoffee}>+10</button>}
      </div>
      <div className='product'>
        <span>{`Sugar: ${sugar}`}</span>
        <button onClick={incrementSugar}>+</button>
        <button onClick={decrementSugar}>-</button>
        {isLoggedIn && <button onClick={increaseSugar}>+10</button>}
      </div>
    </>
  )
}

export default Products