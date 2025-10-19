import axios from 'axios'
import React, { useEffect, useState } from 'react'
const App = () => {
  const [message, setMessage] = useState("")
  useEffect(() => {
    const getLink = async () => {
      try {
       const response = await axios.get("https://dashboard.render.com/web/srv-d3cejh56ubrc73en9250/logs")
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