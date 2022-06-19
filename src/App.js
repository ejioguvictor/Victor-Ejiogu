import { useEffect, useState } from 'react';

import value from './data.json'
import { objValues, findKey, formatInputValue } from './searchFunction'

import './App.css';

function App() {
  const [search, setSearch] = useState('')
  const [path, setPath] = useState('')

  const handleQuery = (e) => {
    setSearch(e.target.value)
  }

  const findPath = () => {
    let newValue = formatInputValue(search);
    let result = findKey(value, newValue);
    setPath(result)
  };


  useEffect(() => {
    findPath()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <div className='container'>
      <h1 className='title'>Search Engine 🚀...</h1>

      <input type="search" className='input' onChange={handleQuery} placeholder=' Enter search text... ' />
      <div className=''>
        <div className="card-container">
          <h2 className='card-title'>Type in the suggested Object Values</h2>
          {objValues.map((item, index) => {
            return (
              <p>Value {index + 1}: {item}</p>
            )
          })}
        </div>
      </div>
      <div className='card-container path-card'>
        <h3 className='space'>Path 👉🏿  {path ? `value.${path}` : 'Oouch! Try again!! '}</h3>
        {path ? <p>Path found  ✅</p> : <p>No path found ❎</p>}
      </div>
    </div>
  );
}

export default App;
