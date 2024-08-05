import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
      <p>Rating: {restaurant.rating}</p>
      <Link to={`/restaurant/${restaurant.id}`}>View Menu</Link>
    </div>
  );
};

export default RestaurantCard;
