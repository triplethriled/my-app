import {combineReducers} from 'redux';
import user from './user';
import googleForm from './googleForm';
import {HYDRATE} from 'next-redux-wrapper';

export const USER_LOGOUT = "USER_LOGOUT"
export const userLogOut = () => ({
  type: USER_LOGOUT,
});

const appReducer = combineReducers({
  user: user,
  googleForm: googleForm,
  
  //여기에 추가될 reducer를 선언하기.
})

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      state = {
        ...state,
        server: {
            ...state.server,
            ...action.payload.server
        }
      }
    case USER_LOGOUT:{
      state = undefined;
    }
  }

  return appReducer(state, action);
};

export default rootReducer