import { createSlice } from "@reduxjs/toolkit";


const initalUser =  JSON.parse(localStorage.getItem('user'));
const initalSelectedUser =  JSON.parse(localStorage.getItem('SelectedUser'))



const initialState = {
    user: initalUser,
    selectedUser: initalSelectedUser,
  }


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
          state.user = action.payload
          localStorage.setItem("user", JSON.stringify(action.payload))
        },
        logout:(state)=>{
          state.user = null
          localStorage.removeItem("user")
        },
        selectUser:(state,action)=>{
          state.selectedUser = action.payload
          localStorage.setItem("SelectedUser",JSON.stringify(action.payload))
         
        }
    }
})  
export const { login,logout,selectUser } = userSlice.actions

export default userSlice.reducer