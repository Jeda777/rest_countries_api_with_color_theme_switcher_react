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
        <button
          id='select'
          className='w-3/5 lg:w-52 py-5 px-6 rounded-lg cursor-pointer shadow-sm lg:shadow text-left'
          onClick={() => setRegionFilterOpen((prev) => !prev)}
        >
          {regionFilter === '' ? 'Filter by Region' : regionFilter}
        </button>
        <div
          id={regionFilterOpen ? 'options-container-active' : 'options-container'}
          inert={!regionFilterOpen ? 'true' : undefined}
        >
          <button
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('')
            }}
            tabindex={0}
          >
            Filter by Region
          </button>
          <button
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('Africa')
            }}
            tabindex={0}
          >
            Africa
          </button>
          <button
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('Americas')
            }}
            tabindex={0}
          >
            Americas
          </button>
          <button
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('Asia')
            }}
            tabindex={0}
          >
            Asia
          </button>
          <button
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('Europe')
            }}
            tabindex={0}
          >
            Europe
          </button>
          <button
            className='option'
            onClick={() => {
              setRegionFilterOpen(false)
              setRegionFilter('Oceania')
            }}
            tabindex={0}
          >
            Oceania
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeFilters
