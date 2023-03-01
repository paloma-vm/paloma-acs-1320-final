import React from "react";

function Heading(props) {
  const {number_of_bands} = props
  return (
    <div className=" text-slate-100 bg-black grid place-content-start p-4 space-y-2">
      <div class='text-3xl font-bold py-2'>Paloma Valdez-Marsh</div>
      <div class=''>ACS 1320 Final Assessment</div>
      <div>Metal Bands 🤘</div>
      <div>Bands: {number_of_bands}</div>
    </div>
  )
}
export default Heading