import { useRouter } from 'next/router'
import LineIcon from './icons/LineIcon'
import SquareIcon from './icons/SquareIcon'
import XIcon from './icons/XIcon'

const Markdown: React.FC<{ fileName: string }> = ({ fileName }) => {
  const router = useRouter()
  return (
    <div className="my-6 w-full transition-all animate-[slide-up-grow_0.5s_ease-in-out]">
      <div className="bg-blue-lighter h-12 px-5 rounded-t-2xl flex justify-end items-center gap-3">
        <LineIcon />
        <SquareIcon />
        <XIcon
          onClick={() => {
            router.back()
          }}
        />
      </div>
      <div className="bg-blue-light text-primary min-h-fit h-[36rem] rounded-b-2xl p-3 overflow-auto text-lg"></div>
    </div>
  )
}

export default Markdown
