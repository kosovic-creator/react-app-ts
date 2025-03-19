/* eslint-disable react-hooks/exhaustive-deps */
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
  const [profil, settProfil] = useState(
    [{ naziv: 'marko', cijena: 30 }, { naziv: 'kosta', cijena: 30 }]);
  const [item, setItem] = useState<any[]>([]);
  const [dozvola, setDozvola] = useState(false);

  const numIme = profil.length
  // console.log(numIme)
  const sumGodine = profil.reduce((acc, cur) => acc + cur.cijena, 0);

  useEffect(() => {
    console.log('Promjena imnema');
    localStorage.setItem('profil', JSON.stringify(profil));
  }, [profil]);
  useEffect(() => {
    localStorage.setItem('profil', JSON.stringify(profil));
    localStorage.setItem('naziv', JSON.stringify('LokalStorage'));
    const storage = localStorage.getItem('naziv');
    alert(storage)
    setDozvola(true);
  }, []);
  return (
    <>
      {/* {ime.map((item, index) => ( */}
      <Children numIme={numIme} />
      <Lift />
      {dozvola && <h1>Dozvola</h1>}
      {data.map((person) => (
        <div key={person.id}>
          <div className='flex justify-left items-center space-x-3'>
            <h2 className='text-red-950 font-light text-2xl '>{person.name}</h2>
            <p>{person.age}</p>
          </div>
        </div>
      ))}
      <button className='bg-slate-400' onClick={() => settProfil(profil => [...profil, { naziv: 'sofija', cijena: 88 }])}>SetIProfilUseState</button>
      <button className='bg-slate-400' onClick={() => setItem([...item, 'ana'])}>Set Ana array useEfect</button>
      <p>{item}</p>

      {profil.map((item, index) => (
        <p key={index}>{item.naziv} - {item.cijena}</p>
      ))}
      <p className='text-red-800'>Ukupno godina:   {sumGodine}</p>
    </>
  );
}

export default App;


interface ChildrenProps {
  numIme: number;
}

function Children({ numIme }: ChildrenProps) {
  const [godine, setGodine] = useState();
  //  setGodine('66')
  // console.log(godine)
  return <div>{numIme}</div>

}
// interface LiftProps {
//   brojGodina: string;
// }


function Lift() {
  return <div>Lift Component</div>;
}