import { Link } from 'react-router-dom'

const CountryTile = ({ item }) => {
  return (
    <Link to={`/${item.code}`} className='country-tile'>
      <img src={item.flag} alt={`${item.name} flag`} />
      <div className='py-7 px-6 flex flex-col gap-4'>
        <h6 className='font-extrabold'>{item.name}</h6>
        <div className='text-sm'>
          <p>
            Population: <span>{item.population}</span>
          </p>
          <p>
            Region: <span>{item.region}</span>
          </p>
          <p>
            Capital: <span>{item.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CountryTile
