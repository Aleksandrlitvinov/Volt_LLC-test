import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

type InitialStateType = {
  todoTitle: string
  todoId: string
}

const initialState: InitialStateType = {
  todoTitle: 'First todo',
  todoId: uuidv4()
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    changeTodoTitle: (state, action: PayloadAction<{ newTitle: string, id:string }>) => {
      state.todoTitle = action.payload.newTitle
    }
  }
})
export const {changeTodoTitle} = todoSlice.actions
export default todoSlice.reducer