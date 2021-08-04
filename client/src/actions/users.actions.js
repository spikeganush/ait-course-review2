import axios from 'axios'

export const GET_USERS = 'GET_USERS'

export const getUsers = () => {
  return (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    }
    return (
      axios
        //${process.env.REACT_APP_API_URL}
        .get(`/api/user`, config)
        .then((res) => {
          dispatch({ type: GET_USERS, payload: res.data })
        })
        .catch((err) => console.log(err))
    )
  }
}
