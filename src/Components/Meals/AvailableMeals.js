import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Dum Biriyani',
      description: 'Dum cooked biryani served with brinjal gravy, onion raitha',
      price: 250,
    },
    {
      id: 'm2',
      name: 'Mutton Biryani',
      description: 'Served with egg, onion raita, brinjal pachadi and bread halwa.',
      price: 200,
    },
    {
      id: 'm3',
      name: 'Bun Paratha',
      description: 'bun parotta with both veg and Non-veg gravy',
      price: 50,
    },
    {
      id: 'm4',
      name: 'Chicken Kotthu Paratha',
      description: 'Chicken gravy with onion raitha...',
      price: 150,
    },
    {
        id: 'm5',
        name: 'Egg Kothu Parotta',
        description: 'Shredded parotta in spicy egg podimas. To satisfy your street food craving.',
        price: 100,
      },
      {
        id: 'm6',
        name: 'Mutton Nalli Fry',
        description: 'Mutton nalli roasted with a corinader base and fried to perfection',
        price: 200,
      },

  ];


const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem
    
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    />);
  return (
    <section className={classes.meals}>
       <Card>
        <ul>            
            {mealsList}
        </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals