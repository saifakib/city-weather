import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import './App.css';
//import querystring from 'querystring'

import Header from './components//header'
import Search from './components/search';
import Weather from './components/weather';

export const WeatherContext = createContext();

function App() {

  const [data, setData] = useState({})
  const [search, setSearch] = useState('Dhaka')

  const API_KEY = '6712faf79ce759566fcf612fb6befc86';
  let ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`;

  useEffect(() => {
    console.log(search)
    fetchingData()
  }, [search])

  const fetchingData = async () => {
    try {
      let result = await axios.get(getProperUrl())
      const resultData = result.data
      setData(resultData)
      console.log("result:", data)

    } catch (e) {
      console.log(e)
    }

  }

  const getProperUrl = () => {
    return ROOT_URL += `${search}`
  }

  const searchTerm = (term) => {
    setSearch(term)
  }

  return (
    <div className="App">
      <div className="container">
        <WeatherContext.Provider value={{ data }}>
          <Header />
          <Search searchTerm={searchTerm} />
          <Weather />
        </WeatherContext.Provider>
      </div>
    </div>
  );
}

export default App;
