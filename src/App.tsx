/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from 'react';

const data = [
  {
    id: 1,
    name: 'Ana Kosovic',
    age: 25,
  },
  {
    id: 2,
    name: 'Luka Kosovic',
    age: 24,
  },
  {
    id: 3,
    name: 'Janko Jankoivc',
    age: 30,
  },
  {
    id: 4,
    name: ' Marko Markovic',
    age: 28,
  },
];
function App() {
  const [ime, setIme] = useState(
    [{ naziv: 'marko', cijena: 30 }, { naziv: 'kosta', cijena: 30 }]);
  const [godine, setGodine] = useState('');

  const numIme = ime.length
  console.log(numIme)
  const sumGodine = ime.reduce((acc, cur) => acc + cur.cijena, 0);

  useEffect(() => {
    console.log('useEffect Samo jednom');
  }, []);

  return (
    <>
      {data.map((person) => (
        <div key={person.id}>
          <div className='flex justify-left items-center space-x-3'>
            <h2 className='text-red-950 font-light text-2xl '>{person.name}</h2>
            <p>{person.age}</p>
          </div>


        </div>
      ))}
      <button className='bg-slate-400' onClick={() => setIme([{ naziv: 'Ana', cijena: 0 }])}>Set Ime</button>
      {ime.map((item, index) => (
        <p key={index}>{item.naziv} - {item.cijena}</p>
      ))}
      <p className='text-red-800'>Ukupno godina:   {sumGodine}</p>
    </>
  );
}

export default App;