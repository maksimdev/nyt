const GET_DATA = 'GET_DATA';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

const initialState = {
  isFetching: false
};

function validResult(articles) {
 if (articles.length) {
   return { result: true, articles }
 }
 return { result: false, articles: [] }
}

export const getData = (queryString) => ({ type: GET_DATA, payload: queryString });
export const getDataSuccess = () => ({ type: GET_DATA_SUCCESS});

function data(state = initialState, action) {
  console.log('action', action);
    switch (action.type) {
        case GET_DATA:
          return { isFetching: true, articles: [] };
        case GET_DATA_SUCCESS:
          return { isFetching: false, ...validResult(action.payload) };
        default:
          return state;
      }
}

export default data;