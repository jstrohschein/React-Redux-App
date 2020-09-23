import axios from 'axios'

import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from './actionTypes'



export const fetchData = () => dispatch => {


    dispatch({ type: FETCH_DATA_START });

    setTimeout(() => {
      
      axios
        .get('https://api.jikan.moe/v3/search/anime?q=Bleach')
  
        .then(response => {
          const data = response.data.results;
          dispatch({ type: FETCH_DATA_SUCCESS, payload: data })
        })
  
        .catch(error => {
          const errorMsg = error.message;
          dispatch( { type: FETCH_DATA_FAIL, payload: errorMsg } )
        })
    }, 1000)

  }




// dispatch({ type: FETCH_DATA_START });

    // setTimeout(() => {
    //   dispatch({ type: FETCH_DATA_SUCCESS })
    // }, 5000)