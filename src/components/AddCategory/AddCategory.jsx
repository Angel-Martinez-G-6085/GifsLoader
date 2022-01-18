import './AddCategory.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [value, setValue] = useState('');

  // Handler
  const inputHandler = (e) => {
    return setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      setCategories((oldState) => {
        return [value, ...oldState];
      });
      setValue('');
    }
  };

  return (
    <form onSubmit={submitHandler} className="input-container">
      <input
        className="category-input"
        type={'text'}
        value={value}
        onChange={inputHandler}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
