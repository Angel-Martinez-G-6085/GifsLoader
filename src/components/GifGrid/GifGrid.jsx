import './GifGrid.scss';
import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useFetchGif } from '../../hooks/useFetchGif';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGif(category);

  return (
    <Fragment>
      <div className="container images-container">
        <h3 className="text-center">{category}</h3>
        {loading && <p className="loading-text">Cargando imagenes</p>}
        <div className="card-container">
          {images.map((obj) => {
            return (
              <li key={obj.id}>
                <img className="card-image" src={obj.url} alt={obj.title} />
                <h3 className="card-title">{obj.title}</h3>
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
