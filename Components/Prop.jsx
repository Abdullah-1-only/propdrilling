import React from 'react'

const Prop = (props) => {
  return (
    <>
     <h1 className="nam bg-amber-600 p-5 font-bold text-9xl ">counter {props.raja} app</h1>
     <button
        onClick={props.eventlistioner}
        className=" m-5 border-2 border-black  bg-green-500 p-5 rounded-lg"
      >
        ADD
      </button>

      
      
    </>
  )
}

export default Prop