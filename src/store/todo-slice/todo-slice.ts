import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'

type TaskType = {
  taskTitle: string
  taskId: string
  isCompleted: boolean
}

type InitialStateType = {
  todoTitle: string
  todoId: string
  tasksList: [] | TaskType[]
}

const initialState: InitialStateType = {
  todoTitle: 'First todo',
  todoId: uuidv4(),
  tasksList: [],
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeTodoTitle: (state, action: PayloadAction<{ newTitle: string, todoId: string }>) => {
      state.todoTitle = action.payload.newTitle
    },
    createTaskForTodo: (state, action: PayloadAction<{ taskTitle: string, todoId: string }>) => {
      const newTask: TaskType = {
        taskTitle: action.payload.taskTitle,
        taskId: uuidv4(),
        isCompleted: false
      }
      state.tasksList = [newTask, ...state.tasksList]
    }
  }
})
export const {changeTodoTitle, createTaskForTodo} = todoSlice.actions
export default todoSlice.reducer