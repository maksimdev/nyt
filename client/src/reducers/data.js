const GET_DATA = 'GET_DATA';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

const initialState = {
  isFetching: false
};

export const getData = (queryString) => ({ type: GET_DATA, payload: queryString });
export const getDataSuccess = () => ({ type: GET_DATA_SUCCESS});

function data(state = initialState, action) {
  console.log('action', action);
    switch (action.type) {
        case GET_DATA:
          return { isFetching: true };
        case GET_DATA_SUCCESS:
          return { isFetching: false };
        default:
          return state;
      }
}

export default data;