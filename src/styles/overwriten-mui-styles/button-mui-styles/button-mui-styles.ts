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