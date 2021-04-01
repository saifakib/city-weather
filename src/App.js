import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
//import querystring from 'querystring'

import Header from './components//header'
import Search from './components/search';
import Weather from './components/weather';


function App() {

  const [data, setData] = useState({})
  const [search, setSearch] = useState('Dhaka')

  const API_KEY = '6712faf79ce759566fcf612fb6befc86';
  let ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`;

  useEffect(() => {
    console.log(search)
    fetchingData()
  },[search])

  const fetchingData = async () => {
    try{
      let result = await axios.get(getProperUrl())
      const resultData = result.data
      setData(resultData)
      console.log("result:",data)
      
    } catch(e) {
      console.log(e)
    }
    
  }

  const getProperUrl = () => {
    //let url = ''
    //if (search) url += `${search}`
    //return url
    //return querystring.stringify({ q: `${search}`});
    return ROOT_URL += `${search}`
  }

  const searchTerm = (term) => {
    setSearch(term)
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Search searchTerm={searchTerm} />
        <Weather weather={data} />
      </div>
    </div>
  );
}

export default App;
