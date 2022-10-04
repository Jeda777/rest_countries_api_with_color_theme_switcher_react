import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import axios from 'axios'

const Details = ({ data }) => {
  const location = useLocation().pathname.replace('/', '')
  const [item, setItem] = useState({})

  useEffect(() => {
    if (data.length !== 0) {
      setItem(data.find((i) => i.code === location))
    } else {
      axios
        .get(`https://restcountries.com/v3.1/alpha/${location}`)
        .then((res) => res.data[0])
        .then((res) => {
          return {
            code: res.cioc,
            flag: res.flags.png,
            name: res.name.common,
            nativeName: res.name.nativeName && Object.values(res.name.nativeName)[0].official,
            population: res.population,
            region: res.region,
            subRegion: res.subregion,
            capital: res.capital,
            tld: res.tld,
            currencies:
              res.currencies &&
              Object.values(res.currencies)
                .map((i) => i.name)
                .join(', '),
            languages: res.languages && Object.values(res.languages).join(', '),
            border: res.borders,
          }
        })
        .then((res) => setItem(res))
    }
  }, [location])

  let borderNames = []
  if (item.border !== undefined) {
    item.border.map((i) => {
      const x = data.find((y) => y.code === i)?.name
      if (x !== undefined) borderNames.push({ code: i, name: x })
    })
  }

  return (
    <main className='text-light-text dark:text-dark-text h-full'>
      <div className='custom-container py-10 sm:py-12 md:py-14 lg:py-18 xl:py-20 flex flex-col gap-10'>
        <Link
          to='/'
          className='bg-light-elements dark:bg-dark-elements flex items-center gap-2 w-max px-6 py-2 rounded
        shadow-md'
        >
          <HiArrowNarrowLeft className='text-2xl' />
          Back
        </Link>
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-16 xl:gap-24 lg:items-center'>
          <img src={item.flag} alt={`${item.name} flag`} className='w-full lg:w-auto lg:h-auto lg:object-contain lg:basis-1/2' />
          <div className='flex flex-col gap-10 lg:basis-1/2'>
            <h6 className='font-extrabold text-2xl -mb-4 xl:text-4xl'>{item.name}</h6>
            <div className='text-sm flex flex-col gap-12 lg:flex-row xl:text-lg'>
              <div className='flex flex-col gap-1.5'>
                <p>
                  Native Name: <span>{item.nativeName}</span>
                </p>
                <p>
                  Population: <span>{item.population}</span>
                </p>
                <p>
                  Region: <span>{item.region}</span>
                </p>
                <p>
                  Sub Region: <span>{item.subRegion}</span>
                </p>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
              <div className='flex flex-col gap-1.5'>
                <p>
                  Top Level Domain: <span>{item.tld}</span>
                </p>
                <p>
                  Currencies: <span>{item.currencies}</span>
                </p>
                <p>
                  Languages: <span>{item.languages}</span>
                </p>
              </div>
            </div>
            {borderNames.length === 0 ? null : (
              <div className='flex flex-col gap-5 lg:flex-row lg:items-center'>
                <p className='xl:text-lg'>Border Countries:</p>
                <div className='flex gap-[10px] flex-wrap'>
                  {borderNames.map((i) => (
                    <Link
                      to={`/${i.code}`}
                      key={i.code}
                      className='font-light text-sm xl:text-base px-6 py-2 bg-light-elements dark:bg-dark-elements w-max rounded-md shadow-md'
                    >
                      {i.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Details
