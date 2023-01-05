import React from 'react';

const VehicleDropdown = ({ vehicles, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="dummy-vehicle">-- Choose a Vehicle --</option>
      {vehicles.map((vehicle) => (
        <option key={vehicle.id} value={vehicle.id}>
          {vehicle.name}
        </option>
      ))}
    </select>
  );
};

export default VehicleDropdown;