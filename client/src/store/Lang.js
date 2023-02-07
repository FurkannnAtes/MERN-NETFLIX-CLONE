import { createSlice } from "@reduxjs/toolkit";

const langInitial = localStorage.getItem("lang")!== null ? localStorage.getItem("lang") : "en"

const initialState = {
    lang: langInitial,
  }

  export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        trChange:(state)=>{
            state.lang ="tr"
        },
        enChange:(state)=>{
            state.lang ="en"
        }
    },
  })

  export const { trChange,enChange } = langSlice.actions

  export default langSlice.reducer