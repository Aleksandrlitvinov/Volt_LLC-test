import { createTheme } from '@mui/material'

export const stylesBtnTask = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'var(--color-accent-700)',
            color: 'var(--color-light-100)',
          },
          backgroundColor: 'var(--color-light-100)',
          border: '2px solid var(--color-accent-700)',
          color: 'var(--color-accent-700)',
          height: '36px',
          minWidth: '30px',
          padding: '5px',
        },
      },
    },
  },
})

export const stylesBtnFilter = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.active': {
            backgroundColor: '#b9237e',
            border: '1px solid #b9237e',
            borderRadius: '4px',
            color: 'antiquewhite',
            padding: '0 10px',
          },
          '&.default': {
            border: '1px solid #b9237e',
            borderRadius: '4px',
            fontSize: '14px',
            padding: '0 10px',
          },
          '&:hover': {
            backgroundColor: '#b9237e',
            border: '1px solid antiquewhite',
            outline: 'none',
            color: 'antiquewhite',
          },
          color: '#b9237e',

          padding: '2px',
          textTransform: 'lowercase',
        },
      },
    },
  },
})
