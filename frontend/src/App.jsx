import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])
//  useEffect(fn,dependencies)
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{
      console.log("error")
    })
  })
  // fro connecting backend and front end we use the proxy 
  // inside the vite config file 
  return (
    <>
      <h1>my fullstack file </h1>
      <p>
          JOKES :{jokes.length}
      </p>
      {
        jokes.map((joke,index)=>(
          //upper parenthesis return krna hoga 
          <div key = {joke.id}>
            <h3>{joke.title}</h3>
            <p>
              {joke.content}
            </p>
          </div>
        ))
      }
    </>
  )
}

export default App
