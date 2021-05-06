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

  useEffect(() => {
    getRestaurant(props.match.params.id);
  }, [props.match.params.id]);

  const deleteReview = (reviewId, index) => {
    RestaurantDataService.deleteReview(reviewId)
      .then((response) => {
        setRsetaurant((prevState) => {
          prevState.reviews.splice(index, 1);
          return {
            ...prevState,
          };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
      <div>
          {restaurant ? (
              <div>
                  <h5>{restaurant.name}</h5>
                  <p>
                      <strong>Cuisine: </strong>{restaurant.cuisine}<br/>
                      <strong>Address: </strong>{restaurant.address.building} {restaurant.address.street}, {restaurant.address.zipcode}
                  </p>
                  <Link to={"/restaurant"}
          )}
      </div>
  )
};

export default Restaurant;
