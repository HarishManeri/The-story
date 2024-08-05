import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurants } from '../redux/restaurantSlice';
import RestaurantCard from '../components/RestaurantCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { restaurants, loading, error } = useSelector(state => state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-page">
      <h1>Welcome to The Story</h1>
      <div className="restaurant-list">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
