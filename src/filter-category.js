import React from 'react';

export default function FilterCategory(props) {
  
  return (
    <select onChange={e=>props.filterChange(e)} required>
      <option value="" selected>No Filter</option>
      <option value="Book">Book</option>
      <option value="Show">Show</option>
    </select>
  );
}