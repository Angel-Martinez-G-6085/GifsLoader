import './GifGrid.scss';
import React from 'react';
import { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchImages from '../../utils/fetchImages';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(category, setImages);
  }, []);

  return (
    <Fragment>
      <div className="container images-container">
        <h3>{category}</h3>
        <div className="card-container">
          {images.map((obj) => {
            return (
              <li key={obj.id}>
                <img src={obj.url} />
                <h3>{obj.title}</h3>
              </li>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
