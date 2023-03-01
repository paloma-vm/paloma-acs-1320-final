import React from 'react';
import { useState } from 'react';

function Like(props) {
  const [count, setCount] = useState(0)
  const {step, min, max} = props
  return (
    <div className='flex pt-4'>
      <button class='btn bg-slate-700 px-2 py-1
       rounded shadow'
        onClick={() => {
          if (count - step > min){
            setCount(count - step)
          } else {
            setCount(min)
          }
        
        }}
      >👎</button>
      <h1 class='px-3 text-3xl font-semibold'>{count}</h1>
      <button class='btn bg-slate-700 px-2 py-1
       rounded shadow'
        onClick={() => {
          if (count + step < max){
            setCount(count + step)
          } else {
            setCount(max)
          }
        }}
      >👍</button>
    </div>
  )
}

export default Like