import React from 'react';

export default function SearchBar(props) {
  
  return (
    <input 
      type="text" 
      placeholder="Search For A Post" 
      value={props.searchTerm}
      onChange={e=>props.onChange(e)}>
    </input>
  );
}