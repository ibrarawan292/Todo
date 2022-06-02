import axios from 'axios'

export const getAllTodos = () => async (dispatch) => {
    const response = await axios.get(`http://localhost:8000/api/v1/todos`)
    dispatch({
        type: 'All_Todos',
        payload: response.data.data
    })
  }