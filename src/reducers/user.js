export const SET_USER = 'SET_USER'
export const SET_CNT = 'SET_CNT'
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setCnt = (newCnt) => ({
  type: SET_CNT,
  payload: newCnt
})
const initialState = {
  user: null,
  hardship: 'yes',
  cnt: 0,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:{
      return {
        ...state,
        user: action.payload,
      }
    }
    case SET_CNT: {
      return { 
        ...state,
        cnt: action.payload
      }
    }
    default:
      return state;
  }
};

export default user;