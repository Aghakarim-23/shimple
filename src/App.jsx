import axios from 'axios'
import React, { useEffect, useState } from 'react'
const App = () => {
  const [message, setMessage] = useState("")
  useEffect(() => {
    const getLink = async () => {
      try {
       const response = await axios.get("https://simple-4wr3.onrender.com")
        setMessage(response.data)
      } catch (error) {
        console.error(error);
      } 
    }

    getLink()
  },[])
  return (
    <div className='h-screen flex justify-center items-center'>
      {message}
    </div>
  )
}

export default App