import React from 'react'
import LineIcon from './icons/LineIcon'
import SquareIcon from './icons/SquareIcon'
import XIcon from './icons/XIcon'

const Shell :React.FC<{setShowShell}>= ({setShowShell}) => {
  return (
    <div className="my-6 w-full transition-all animate-[slide-up-grow_0.5s_ease-in-out]">
      <div className="bg-blue-lighter h-12 px-5 rounded-t-2xl flex justify-end items-center gap-3">
        <LineIcon />
        <SquareIcon />
        <XIcon onClick={() => {setShowShell(false)}}/>
      </div>
      <div className="bg-blue-light min-h-fit h-[28rem] rounded-b-2xl"></div>
    </div>
  )
}

export default Shell
