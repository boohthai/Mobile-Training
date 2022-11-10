import AsyncStorage from '@react-native-community/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const logInSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    pw: '',
  },
  reducers: {
    setLogInState (state, action) {
    if (action.payload.email !=='' && action.payload.pw!==''){
      // alert("Logged in");
      return {...state,   
        isLoggedIn: true,
        email: action.payload.email,
        pw: action.payload.pw,
      }
    }
    else {
      alert("Failed");
    }
  },
    setLogOutState (state, action) {
      alert("Logout")
      return {
       email: '',
       pw: ''
     }  
    },
  },
}
)

export const logInReducer = logInSlice.reducer;
export const {setLogInState, setLogOutState} = logInSlice.actions;
