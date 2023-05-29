const BASE_URL = 'https://app-be-dot-projectakhir-388012.et.r.appspot.com/';

const API_ENDPOINT = {
  REGISTER: `${BASE_URL}user/register`,
  LOGIN: `${BASE_URL}user/login`,
  HOME: `${BASE_URL}course`,
  PICTURE: (id) => `${BASE_URL}course/image/${id}`,
  ADD: `${BASE_URL}course/`,
};

export default API_ENDPOINT;
