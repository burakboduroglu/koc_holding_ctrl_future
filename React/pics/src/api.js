import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Cq4LOWdX0Pw_fqPOnJevFfVNvScHh7NCfe2vLgEuMfw',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
