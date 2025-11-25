"use client";
import React, { useState } from 'react'

function input() {
    const [value,setValue] =useState("");
  return (
    <div>
        <input type="text" style={{padding:"50px 30px",border:"1px solid black",fontSize:"50px"}}/>
    </div>
  )
}

export default input