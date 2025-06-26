import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button  variant="contained" startIcon={<DeleteIcon/>}>Helu</Button>
    </>
  )
}

export default App
