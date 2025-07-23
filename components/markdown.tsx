import Router from 'next/router'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import LineIcon from './icons/LineIcon'
import SquareIcon from './icons/SquareIcon'
import XIcon from './icons/XIcon'

const Markdown = (props: {
  fileName: string
  children: ReactElement<any, string | JSXElementConstructor<any>>
}) => {
  return (
    <div className="my-6 w-full transition-all animate-[slide-up-grow_0.5s_ease-in-out]">
      <div className="bg-blue-lighter h-12 px-5 rounded-t-2xl flex justify-between items-center">
        <p className="text-2xl text-primary-lighter capitalize">{props.fileName}.md</p>
        <div className="flex items-center gap-3">
          <LineIcon />
          <SquareIcon />
          <XIcon
            onClick={() => {
              Router.back()
            }}
          />
        </div>
      </div>
      <div className="bg-blue-light text-primary min-h-fit h-[36rem] rounded-b-2xl p-3 overflow-auto text-base md:text-lg">
        {props.children}
      </div>
    </div>
  )
}

export default Markdown
