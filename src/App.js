/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react';
import axios from "axios"

function App() {

  const [result,setResult]=useState([]);
  const [query, setQuery]=useState('react native')
  useEffect(()=>{
    getResults();
  },[query]);

 const getResults=async()=>{
  const response= await axios.get(  
    `http://hn.algolia.com/api/v1/search?query=${query}`); 
      setResult(response.data.hits)
  };
  
  return (
    <>
    <div>irshad</div>
    <input type="text" 
    onChange={event=>setQuery(event.target.value)}
    value={query}></input>
    <ul>
          {result.map(result => (
            <li key={result.objectID}>
              <a href={result.url}>
                {result.title}
              </a>
            </li>
          ))}
        </ul>
    </>
  );
}

export default App;
