import React from 'react'

interface Dete1Props {
  naziv:string
}

export const Dete1: React.FC<Dete1Props> = (props) => {
  
  return (
    <div>{props.naziv} </div>
  )
}
