import { createTheme } from '@mui/material'

export const stylesAddItemForm = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          '& .Mui-focused fieldset': {
            border: 'none',
            outline: 'none',
          },
          '&:active fieldset': {
            border: 'none',
            outline: 'none',
          },
          '&:focus fieldset': {
            outline: 'none',
          },
          '&:focus-visible fieldset': {
            outline: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
            outline: 'none',
          },
        },
        root: {
          '&.Mui-error fieldset': {
            border: '2px solid #cc1439',
            borderColor: '#cc1439 !important',
          },
          '&.Mui-error input': {
            borderWidth: '1px',
          },
          '&:hover fieldset': {
            border: 'none',
            outline: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:focus fieldset': {
            outline: 'none',
          },
          '&:focus-visible fieldset': {
            outline: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
            outline: 'none',
          },
          border: '2px solid #b9237e',
          borderRadius: '4px',
          boxSizing: 'border-box',
          height: '36px',
          padding: '3px 3px 3px 10px',
        },
        root: {
          '& .Mui-focused fieldset': {
            border: 'none',
            outline: 'none',
          },
          '&:active fieldset': {
            borderColor: 'transparent',
            outline: 'none',
          },
          '&:focus fieldset': {
            outline: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
            outline: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .Mui-focused fieldset': {
            border: 'none',
            outline: 'none',
          },
          '& fieldset': {
            borderColor: '#b9237e',
          },
          '&:active fieldset': {
            border: 'none',
            outline: 'none',
          },
          '&:focus fieldset': {
            border: '1px solid #8c61ff',
            outline: 'none',
          },
          '&:hover fieldset': {
            borderColor: 'red',
          },
          border: 'none',
          height: '36px',
          width: '100%',
        },
      },
    },
  },
})
