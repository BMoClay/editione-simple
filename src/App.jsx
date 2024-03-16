import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BOOKS } from "./pages/bookObjects.js"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>sup</h1>
     <div>
      {BOOKS.map((book) => (
        <img key={book.id} src={book.coverImage} />
      ))}
     </div>
    </>
  )
}

export default App
