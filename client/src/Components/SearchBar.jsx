// SearchBar.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(searchQuery);
  };


  return (
    <TextField
      variant="outlined"
      placeholder='Search (e.g. Title or Author)'
      fullWidth
      value={searchQuery}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
