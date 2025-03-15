/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Dete1 } from './Dete1';

export const Roditelj = () => {
  const [broj, setBroj] = React.useState(0)
  const incrementBroj = () => setBroj(broj + 1);
  const ime = 'haris'
  return (
    <>

      <Dete1 naziv={ime} />
      <div>
        <button onClick={incrementBroj}>Increment</button>
        <div>Roditelj: {broj}</div>
      </div>

    </>

  )
}
