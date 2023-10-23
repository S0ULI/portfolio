import React from 'react'

const Wrapper = ({myStyle, mt, px, children}) => {
  return (
    <div className={`${myStyle} ${mt || 'mt-8'} ${px || 'px-8'} max-w-7xl m-auto w-full`}>
        {children}
    </div>
  )
}

export default Wrapper