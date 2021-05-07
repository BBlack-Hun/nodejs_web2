import React, { useState } from 'react';
import RestaurantDataService from '../services/restaurant';
import { Link } from 'react-router-dom';

const AddReivew = (props) => {
  let initialReviewState = '';

  let editing = false;

  if (props.location.state && props.location.state.currentReview) {
    editing = true;
    initialReviewState = props.location.state.currentReview.text;
  }

  const [review, setReview] = useState(initialReviewState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setReview(event.target.value);
  };

  return <div className="App">Hello World.</div>;
};

export default AddReivew;
