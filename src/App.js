import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      const names = data.map(country => country.name);
      console.log(names);
      })
    .catch(error=> console.log(error))
  }, [])


  return (
    <div className="App">
      <h1> Countires: {countries.length}</h1>
      <ul>
        {countries.map(country => <Country name ={country.name}></Country>)}
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
