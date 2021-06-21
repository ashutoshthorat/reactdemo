import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8080/user/register',
});

/**
 * Request Wrapper with default success/error actions
 */
const request = (options) => {
    console.log("succesfully");
  const onSuccess = (response) => {
      debugger
    console.log("datatatatat");

    console.debug('Request Successful!', response);
    return response;
  };

  const onError = (error) => {
    debugger
      console.log("datatatatat");
    console.log('Request Failed:', error.config);
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Data:', error.response.data);
      console.log('Headers:', error.response.headers);
    } else {
      console.log('Error Message:', error.message);
    }
    return Promise.reject(error.response || error.message);
  };
  debugger

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;