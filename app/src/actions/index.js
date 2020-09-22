export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'


export const fetchData = dispatch => {

  dispatch({ type: FETCH_DATA_START });

  setTimeout(() => {
    dispatch({ type: FETCH_DATA_SUCCESS })
  }, 5000)

  axios
    .get('...')
    .then(response => {
      console.log('Actions index.js axios response: ', response)
      dispatch({ type: FETCH_DATA_SUCCESS, payload: { /*object data if needed */ } })
    })
    .catch(error => {
      console.log('Actions index.js axios error: ', error)
      dispatch({ type: FETCH_DATA_FAIL, payload: `Error fetchin data: ${error.message}`})
    })

}