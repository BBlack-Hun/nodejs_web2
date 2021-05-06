import React, { useState, useEffect } from 'react';
import RestaurantDataService from '../services/restaurant';
import { Link } from 'react-router-dom';

const Restaurant = (props) => {
  const initialRestaruantState = {
    id: null,
    name: '',
    address: {},
    cuisine: '',
    revies: [],
  };
  const [restaurant, setRsetaurant] = useState(initialRestaruantState);

  const getRestaurant = (id) => {
    RestaurantDataService.get(id)
      .then((response) => {
        setRsetaurant(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return <div className="App">Hello World.</div>;
};

export default Restaurant;
