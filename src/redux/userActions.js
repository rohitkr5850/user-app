import axios from 'axios';
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from './userSlice';

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(fetchUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};
