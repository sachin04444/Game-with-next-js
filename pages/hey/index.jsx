"use client";
import React, { useState } from 'react'

const index = () => {
  const [value, setvalue] = useState(0)

  return (
    <div>
      <div className="flex">
        <div>
          <div className="in">
            <input type="text" />
          </div>
          <div className="in">
            <input type="text" />
          </div>
          <div className='in'>
            <input type="submit" value="submit" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
