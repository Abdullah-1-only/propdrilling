"use client";
import Admin from "@/Components/Admin";
import Login from "@/Components/Login";
import Prop from "@/Components/Prop";
import React, { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  const [first, setfirst] = useState(false)
  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Prop raja={count} eventlistioner={handleClick} />


      {first ? <Admin /> :   <Login />}
      
    
    </>
  );
};

export default page;
