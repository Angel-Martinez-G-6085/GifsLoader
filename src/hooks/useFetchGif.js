import { useEffect, useState } from 'react';
import fetchImages from '../utils/fetchImages';

export const useFetchGif = (category) => {
  const [images, setImages] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetchImages(category, setImages);
  }, [category]);

  return images;
};
