import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions/index'

const initState = {
  name: ''
}

export const reducer = ( state = initState, action ) => {

  switch ( action.type ){
    case FETCH_DATA_START:
      return {
        ...state,
        //stuff
      }

    case FETCH_DATA_SUCCESS:
      return{
        ...state,
        //stuff
      }

    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }

}