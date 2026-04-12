import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
  name:"auth",
  initialState:{
    user:null,
    loading:false,
    error:null,
  },
  reducers:{
    setUser:(action,state)=>{
      state.user = action.payload;
    },
    setLoading:(action,state)=>{
      state.loading = action.payload;
    },
    setError:(action,state)=>{
      state.error = action.payload;
    }
  }
})

export const {setError,setLoading,setUser} = authSlice.actions;
export default authSlice.reducer