import React, { useState } from 'react';

const NewVehicleForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      speed,
      image,
    });

    setName('');
    setSpeed('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="speed">Speed:</label>
      <input
        type="text"
        id="speed"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />
      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default NewVehicleForm;
