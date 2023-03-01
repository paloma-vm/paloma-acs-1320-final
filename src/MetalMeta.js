import React from 'react';
import Band from './Band';
import data from './metal.json';

function MetalMeta() {
  const bands = data
  .map((obj) => {
    const { band_name, formed, origin, fans, split } = obj

    return (
        <Band
          // id={id} don't need an id because the names are unique
          key={band_name}
          name={band_name}
          formed={formed}
          origin={origin}
          fans={fans}
          split={split}
        />
    )
  })
  return (
    <div className='grid grid-cols-3 gap-0'>
      {bands}
    </div>
  )
}

export default MetalMeta