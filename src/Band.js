import React from 'react';
import Like from './Like';
import OriginFlag from './OriginFlag';

function Band(props) {
  const {name, formed, origin, fans, split} = props
  const num_fans = (fans * 1000).toLocaleString('en')
  
// I am sure there is a better way to do this, but I don't have enough time to explore that right now.
// I put some of what I was doing on alt-band.js  I think it is more complicated than it needs to be.
if (split == '-') {
  return (
<div className='bg-black text-slate-200 border border-slate-400 grid place-content-left p-12 space-y-1'>
        <div className='text-slate-200 text-3xl pb-4 font-semibold'>{name}</div>
        <div class='flex space-x-2'>
          <div class='font-semibold'>Formed: </div>
          <div class='font-extralight'>{formed}</div>
        </div>
        <div class='flex space-x-2'>
          <div class='font-semibold'>Origin: </div>
          <div class='font-extralight'>{origin}</div>
          <OriginFlag origin={origin} />
        </div>
        <div class='flex space-x-2'>
          <div class='font-semibold'>Fans: </div>
          <div class='font-extralight'>{num_fans}</div>
        </div>
        <Like 
          step={1}
          min={0}
          max={10000}
        />
      </div>
    )
  }
  else {
    return (
      <div className='bg-black text-slate-200 border border-slate-400 grid place-content-left p-12 space-y-1'>
        <div className='text-slate-200 text-3xl pb-4 font-semibold'>{name}</div>
        <div class='flex space-x-2'>
          <div class='font-semibold'>Formed: </div>
          <div class='font-extralight'>{formed}</div>
        </div>
        <div class='flex space-x-2'>
          <div class='font-semibold'>Origin: </div>
          <div class='font-extralight'>{origin}</div>
          <OriginFlag origin={origin} />
        </div>
        <div class='flex space-x-2'>
          <div class='font-semibold'>Fans: </div>
          <div class='font-extralight'>{num_fans}</div>
        </div>
        <div class='flex space-x-2'>
          <div class='font-semibold'>Split: </div>
          <div class='font-extralight'>{split}</div>
        </div>
      </div>
    )
  }
}

export default Band