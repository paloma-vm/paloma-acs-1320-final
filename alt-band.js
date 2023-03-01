import React from 'react';
import Like from './src/Like';
import OriginFlag from './src/OriginFlag';
import { ReactDOM } from 'react';



function Band(props) {
  const {name, formed, origin, fans, split} = props
  const num_fans = (fans * 1000).toLocaleString('en')
  


  function IsSplit() {
    return <div class='flex space-x-2'>
    <div class='font-bold'>Split: </div>
    <div>{split}</div>
    </div>;
  }
  function NotSplit(Like) {
    return  
      <Like 
      step={1}
      min={0}
      max={10000} 
      />
    }
  

  function SplitOrLike(props) {
    const split_or_like = props.split;
    if (split == '-') {
      return <NotSplit />;
    }
    else {
      return <IsSplit />;
    }
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));



  // if (split == '-') {
  //   split_or_like =  <div class='flex space-x-2'>
  //   <div class='font-bold'>Split: </div>
  //   <div>{split}</div>
  //   </div>
  // }
  // else {
  //   split_or_like = 
  //   <Like 
  //   step={1}
  //   min={0}
  //   max={10000}
  // />
  // }

  
  // if (split == '-') {
  return (
      <div className='bg-black text-slate-200 border border-slate-400 grid place-content-center h-90'>
        <div className='text-slate-200 text-3xl'>{name}</div>
        <div class='flex space-x-2'>
          <div class='font-bold'>Formed: </div>
          <div>{formed}</div>
        </div>
        <div class='flex space-x-2'>
          <div class='font-bold'>Origin: </div>
          <div>{origin}</div>
        
          <OriginFlag origin={origin} />
        </div>
        <div class='flex space-x-2'>
          <div class='font-bold'>Fans: </div>
          <div>{num_fans}</div>
        </div>
        {/* {split_or_like} */}
        root.render(<SplitOrLike split={split} />);
        {/* <Like 
          step={1}
          min={0}
          max={10000}
        /> */}
      </div>
    )
  }
  // else {
  //   return (
  //     <div className='bg-black text-slate-200 border border-slate-400 grid place-content-left'>
  //       <div className='text-slate-200 text-3xl'>{name}</div>
  //       <div class='flex space-x-2'>
  //         <div class='font-bold'>Formed: </div>
  //         <div>{formed}</div>
  //       </div>
  //       <div class='flex space-x-2'>
  //         <div class='font-bold'>Origin: </div>
  //         <div>{origin}</div>
  //         <OriginFlag origin={origin} />
  //       </div>
  //       <div class='flex space-x-2'>
  //         <div class='font-bold'>Fans: </div>
  //         <div>{num_fans}</div>
  //       </div>
  //       <div class='flex space-x-2'>
  //         <div class='font-bold'>Split: </div>
  //         <div>{split}</div>
  //       </div>
  //     </div>
      
      
  //   )
  // }
// }

export default Band