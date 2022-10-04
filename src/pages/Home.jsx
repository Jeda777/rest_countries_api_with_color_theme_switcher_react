import { useState } from 'react'
import CountryTile from '../components/CountryTile'
import HomeFilters from '../components/HomeFilters'

const Home = ({ data }) => {
  const [textFilter, setTextFilter] = useState('')
  const [regionFilter, setRegionFilter] = useState('')
  const [regionFilterOpen, setRegionFilterOpen] = useState(false)

  return (
    <main className='h-full'>
      <div className='custom-container py-6 md:py-8 lg:py-10 xl:py-12'>
        <HomeFilters
          setTextFilter={setTextFilter}
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
          regionFilterOpen={regionFilterOpen}
          setRegionFilterOpen={setRegionFilterOpen}
        />
        <div className='flex flex-wrap justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-[4.5rem] mt-10 md:mt-11 xl:mt-12'>
          {data
            .filter((i) => i.region.includes(regionFilter))
            .filter((i) => i.name.toLowerCase().includes(textFilter.toLowerCase()))
            .map((i) => (
              <CountryTile key={i.name} item={i} />
            ))}
        </div>
      </div>
    </main>
  )
}

export default Home
