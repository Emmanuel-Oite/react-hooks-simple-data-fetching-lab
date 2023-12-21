// This lab is missing the App component that index.js is looking for. To pass the tests in this lab:
// Create an App component from scratch
// Use the useEffect hook in the App component. Inside the callback for useEffect, send a fetch request to https://dog.ceo/api/breeds/image/random, a free API that returns a random image of a dog.
// Display a <p> tag with the text of "Loading..." when the component is first rendered
// After receiving a response from the API, show the dog image in an <img> tag, with the alt attribute set to "A Random Dog".
// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
 const [loading, setLoading] = useState(true);
 const [image, setImage] = useState('');

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImage(data.message);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
 }, []);

 return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={image} alt="A Random Dog" />
      )}
    </div>
 );
}

export default App;