import React from 'react';

interface ChildComponent2Props {
  value: string;
}

export default function ChildComponent2({ value }: ChildComponent2Props) {
return (
  <>
  <div className='bg-slate-500 text-white p-4'>
  <p> Child 2</p>
  <p>Trenutna vrednost iz Child 1: {value}</p>

  </div>

  </>
);


}