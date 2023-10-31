import React, {useState, useEffect} from 'react'

function Home() {
  const [data, setData] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState('All')

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,region,flag')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const regions = [...new Set(data?.map((country) => country.region))]
  regions.unshift('All')

  const filterCountriesByRegion = (region) => {
    setSelectedRegion(region)
  }

  return (
    <div>
      <div className='header-region-container'>
  <h2>Countries</h2>
  <div className='region-button'>
    {regions.map((region) => (
      <button
        key={region}
        onClick={() => filterCountriesByRegion(region)}
        style={{
          textDecoration: selectedRegion === region ? 'underline' : 'none',
        }}
      >
        {region}
      </button>
    ))}
  </div>
</div>
<div className="clearfix">
  {regions.map((region) => (
    <div
      key={region}
      style={{ display: region === selectedRegion ? 'block' : 'none' }}
    >
      {data &&
        data
          .filter((country) =>
            region === 'All' ? true : country.region === region
          )
          .map((country, index) => (
            <div key={index} className="country-container">
              <div className="left-side">
              <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: '100px' }}
                />
                
              </div>
              <div className="right-side">
              <h3>{country.name}</h3>
                <p>{country.region}</p>
              </div>
            </div>
          ))}
    </div>
  ))}
</div>

    </div>
  )
}

export default Home
