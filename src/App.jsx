import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Details from './pages/Details'
import Home from './pages/Home'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) =>
        res.data.map((item) => {
          return {
            code: item.cioc,
            flag: item.flags.png,
            name: item.name.common,
            nativeName: item.name.nativeName && Object.values(item.name.nativeName)[0].official,
            population: item.population,
            region: item.region,
            subRegion: item.subregion,
            capital: item.capital,
            tld: item.tld,
            currencies:
              item.currencies &&
              Object.values(item.currencies)
                .map((i) => i.name)
                .join(', '),
            languages: item.languages && Object.values(item.languages).join(', '),
            border: item.borders,
          }
        }),
      )
      .then((res) => setCountriesData(res))
  }, [])

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path='/' element={<Home data={countriesData} />} />
          <Route path='/:countryName' element={<Details data={countriesData} />} />
          <Route path='/undefined' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
