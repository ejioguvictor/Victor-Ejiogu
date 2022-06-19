import { useEffect, useState } from 'react';

import obj from './data.json'
import { objValues, findKey, formatInputValue } from './searchFunction'

import './App.css';

function App() {
  const [query, setQuery] = useState('')
  const [pathFound, setPathFound] = useState('')

  const handleQuery = (e) => {
    setQuery(e.target.value)
  }

  const findPath = () => {
    let newValue = formatInputValue(query);
    let result = findKey(obj, newValue);
    setPathFound(result)
  };


  useEffect(() => {
    findPath()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <div className='container'>
      <h1 className='title'>Search Engine...</h1>

      <input type="search" className='input' onChange={handleQuery} placeholder=' Enter search text... ' />
      <div className='card-list'>
        {objValues.map((value, index) => {
          return (
            <div className='card-container' key={index}>
              Value: <span><b>{value}</b></span>

            </div>
          )
        })}
      </div>
      <div className='card-container path-card'>
        <h3 className='space'>Path 👉🏿  {pathFound ? `obj.${pathFound}` : 'Oouch! Try again!! '}</h3>
        {pathFound ? <p>Path found 🚀 ✅</p> : <p>You haven't found a path ❎</p>}
      </div>
    </div>

  );
}

export default App;
