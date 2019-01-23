export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const GET_MORE_DATA = 'GET_MORE_DATA';
export const GET_MORE_DATA_SUCCESS = 'GET_MORE_DATA_SUCCESS';

const initialState = {
  isFetching: false,
  isFetchingAgain: false,
  result: false,
  articles: []
};

export const getData = (queryString) => ({ type: GET_DATA, payload: queryString });
export const getDataSuccess = () => ({ type: GET_DATA_SUCCESS});
export const getDataFailure = () => ({ type: GET_DATA_FAILURE});

export const uploadMore = (queryString, page) => ({ type: GET_MORE_DATA, payload: { queryString, page } });

const mergeList = (arr1, arr2) => (
  { articles: arr1.concat(arr2) }
)

function data(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
          return { isFetching: true, articles: [] };
        case GET_DATA_SUCCESS:
          return { isFetching: false, result: true, articles: action.payload };
        case GET_MORE_DATA:
          return { ...state, isFetchingAgain: true };
        case GET_MORE_DATA_SUCCESS:
          return { ...state, isFetchingAgain: false, ...mergeList(state.articles, action.payload) };
        case GET_DATA_FAILURE:
          return { ...state, error: action.payload };
        default:
          return state;
      }
}

export default data;