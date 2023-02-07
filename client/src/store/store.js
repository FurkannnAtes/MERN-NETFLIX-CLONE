import { configureStore } from '@reduxjs/toolkit'
import langSliceReducer from "./Lang"
import userSliceReducer from "./User"

export const store = configureStore({
  reducer: {
    lang:langSliceReducer,
    user:userSliceReducer,
    
  },
})