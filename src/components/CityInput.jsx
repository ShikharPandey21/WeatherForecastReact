import React, { useState } from "react";

function CityInput(props) {
    const[input,setInput]=useState("")

    const inputValue =(e)=>{
        e.preventDefault()
        props.onSearch(input)
    }

  return (
    <>
      <form onSubmit={inputValue}>
        <input onChange={(e)=>setInput(e.target.value)}  type="text" placeholder="City Name" value={input}></input>
        <button>submit</button>
      </form>
    </>
  );
};

export default CityInput;
