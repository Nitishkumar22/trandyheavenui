import { createSlice } from '@reduxjs/toolkit'  


const initialState = {
    user:null
}

export const Reducers = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
     getUser:(state,action)=>{
         state.user = action.payload
     }
  },
})

// Action creators are generated for each case reducer function
export const { getUser} = Reducers.actions

export default Reducers.reducer