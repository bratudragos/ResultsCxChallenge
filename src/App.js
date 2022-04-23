import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cat from './components/Cat';
import Button from 'react-bootstrap/button';

function App() {
  const CAT_API = 'https://api.thecatapi.com/v1/breeds';

  const [cats, setCats] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [sortedBy, setSortedBy] = useState('');

  const searchCat = (cat) => {
    const name = cat.name.toLowerCase();
    const origin = cat.origin.toLowerCase();
    const lowerSearchString = searchString.toLowerCase();
    if (
      name.search(lowerSearchString) !== -1 ||
      origin.search(lowerSearchString) !== -1
    ) {
      return cat;
    }
  };

  const compareByName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const compareByOrigin = (a, b) => {
    if (a.origin < b.origin) {
      return -1;
    }
    if (a.origin > b.origin) {
      return 1;
    }
    return 0;
  };

  React.useEffect(() => {
    axios
      .get(CAT_API)
      .then((res) => {
        //setCats(res.data.sort(sortedBy));
        if (sortedBy === 'origin') {
          setCats(res.data.sort(compareByOrigin));
        } else {
          setCats(res.data.sort(compareByName));
        }
      })
      .catch((err) => console.log('Error while fetching users:' + err));
  }, [sortedBy]);

  return (
    <div className='page'>
      <header className='navbar'>
        Search cats:
        <input
          type='text'
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder='search'
        />
        <div className='sortButtons'>
          <Button className='sort_button' onClick={() => setSortedBy('origin')}>
            Sort cats by origin
          </Button>
          <Button className='sort_button' onClick={() => setSortedBy('name')}>
            Sort cats by name
          </Button>
        </div>
      </header>

      <div className='body bg-dark'>
        <div className='cats__container'>
          <div className='inner_container'>
            <div className='flex-left'>
              {cats
                .filter((cat) => {
                  return searchCat(cat);
                })
                .map((cat, idx) => (
                  <Cat props={cat} key={idx} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
