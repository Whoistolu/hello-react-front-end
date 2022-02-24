import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingAction } from '../store/greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  const loadGreeting = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    try {
      const { data } = await axios.get(`${baseUrl}`);

      dispatch(getGreetingAction(data.greeting.message));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    loadGreeting();
  }, [dispatch]);

  return (
    <div className="center-items">
      Greeting
      {message !== null && (
        <>
          <h1>{message}</h1>
          <button type="submit" onClick={loadGreeting}>
            {' '}
            Get Greeting
            {' '}
          </button>
        </>
      )}
    </div>

  );
};

export default Greeting;
