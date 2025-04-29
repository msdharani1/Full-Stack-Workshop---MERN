import React from 'react'
import FoodCard from './components/FoodCard'
import Food from './components/Food'
import foods from "./data/foods.json"

const App = () => {
  return (
    <>
      <div className="container">
        <Food />
        <div className="card-container">
          {foods.map((food, index) => (
            <FoodCard key={index} name={food.name} des={food.description} image={food.image} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;