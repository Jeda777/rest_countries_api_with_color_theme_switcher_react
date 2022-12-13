import { HiSearch } from 'react-icons/hi'

const HomeFilters = ({ setTextFilter, regionFilter, setRegionFilter, regionFilterOpen, setRegionFilterOpen }) => {
  return (
    <div className='flex justify-center flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0 lg:items-center'>
      <div
        className='flex gap-6 bg-light-elements dark:bg-dark-elements px-7 lg:px-8 py-4 rounded-lg shadow-sm lg:shadow
      focus-within:outline'
      >
        <HiSearch className='text-2xl' />
        <input
          type='text'
          placeholder='Search for a country...'
          onChange={(e) => setTextFilter(e.target.value)}
          className='bg-light-elements dark:bg-dark-elements lg:w-80 focus-visible:outline-none'
        />
      </div>
      <div id='select-box'>
        <div
          id='select'
          className='w-3/5 lg:w-52 py-5 px-6 rounded-lg cursor-pointer shadow-sm lg:shadow'
          onClick={() => setRegionFilterOpen((prev) => !prev)}
        >
          {regionFilter === '' ? 'Filter by Region' : regionFilter}
        </div>
        <div id={regionFilterOpen ? 'options-container-active' : 'options-container'}>
          <p
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('')
            }}
          >
            Filter by Region
          </p>
          <p
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('Africa')
            }}
          >
            Africa
          </p>
          <p
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('Americas')
            }}
          >
            Americas
          </p>
          <p
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('Asia')
            }}
          >
            Asia
          </p>
          <p
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('Europe')
            }}
          >
            Europe
          </p>
          <p
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('Oceania')
            }}
          >
            Oceania
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeFilters
