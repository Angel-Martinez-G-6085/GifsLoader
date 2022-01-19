import './GifyApp.scss';
import React from 'react';
import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import AddCategory from '../AddCategory/AddCategory.jsx';
import GifGrid from '../GifGrid/GifGrid.jsx';

const GifyApp = (props) => {
  const [categories, setCategories] = useState([]);

  return (
    <Fragment>
      <div className="container giffyapp-container">
        <h2 className="header-title">Giffy Browser</h2>
      </div>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </Fragment>
  );
};

GifyApp.propTypes = {};

export default GifyApp;
