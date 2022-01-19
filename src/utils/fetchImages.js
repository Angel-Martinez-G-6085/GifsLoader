const key = 'cNMT4MJPPqtprZmCrf6JHcBiZzTnIlYp';
const axios = require('axios').default;

const fetchImages = async (category, func) => {
  const instance = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=5`,
  });
  try {
    const response = await instance.get();
    const { data } = response;
    const finalData = data.data;
    const filteredData = finalData.map((obj) => {
      return {
        id: obj.id,
        title: obj.title,
        url: obj.images.downsized_medium.url,
      };
    });
    func({
      data: filteredData,
      loading: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export default fetchImages;
