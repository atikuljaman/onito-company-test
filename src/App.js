import { useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import { gql, useQuery } from '@apollo/client';


const COUNTRY_QUERY = gql`
    query{
      continents{
        code
        name
      }
    }
  `

function App() {
  const [code, setCode] = useState("")
  const { loading, error, data } = useQuery(COUNTRY_QUERY);

  const handleSelectOption = e => {
    setCode(e.target.value)
  }


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <h1>Continents</h1>
      <select onChange={handleSelectOption} id='continents'>
        <option defaultValue>select a continent</option>
        {data?.continents?.map(continent => (
          <option key={continent?.code} value={continent?.code}>{continent?.name}</option>
        ))}
      </select>
      <Countries code={code} />
    </div>
  )

}

export default App;
