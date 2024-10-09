import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

const[product, setProduct]=useState([])
const[error,setError]=useState(false)
const[loading,setLoading]=useState(false)
useEffect(()=>{
  ;(async()=>{
    try {
       setLoading(true)
      setError(false)
      const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response.data);
      setProduct(response.data)
      setLoading(false)

    } catch (error) {
      setError(true)
    }
    
  })() 
},[])

// if(error){
//   return <h1>something went Wrong</h1> we can write this code of line like done in return first line
// }
// if(loading){
// return <h1>Loading..</h1>
// }
  return (
    <>
      {error && (<h1>something went Wrong</h1>)}
      {loading && (<h1>loading ..</h1>)}
     <h1>No of posts :{product.length}</h1>
    {product.length> 0 ?
    (<h1>Post :{product[2].body}</h1>):
    (<h1>loading..</h1>)
}


    </>
  )
}

export default App
