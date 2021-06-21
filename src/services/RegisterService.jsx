import axios from 'axios';

export const register = async(data) => {
  console.log(data)
  const POST_URL = 'http://localhost:8080/user/register';
  const result = await axios.post(POST_URL,data);
  console.log(result)
}
