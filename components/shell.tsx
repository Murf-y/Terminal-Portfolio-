import useCommand from '@hooks/useCommand'
import useDidMount from '@hooks/useDidMount'
import React, { useEffect, useRef, useState } from 'react'
import LineIcon from './icons/LineIcon'
import SquareIcon from './icons/SquareIcon'
import XIcon from './icons/XIcon'

const shellInit = [
  'Portfolio [Version 2.0.4]',
  '(c) Murf-y Corporation. All rights reserved',
]

const shellUser = "C:\Users\Murf>"

const commandsAtStartup = [
  "dir",
  "help"
]

const Shell: React.FC<{ setShowShell }> = ({ setShowShell }) => {
  let [linesToBeDisplayed, setLinesToBeDisplayed] = useState<String[]>(shellInit)

  
  const input = useRef(null)

  useDidMount(() => {
    commandsAtStartup.forEach((command) => processCommand(command))
  })
  useEffect(() => {
    if (input.current) {
      ;(input.current as HTMLInputElement).focus()
    }
  }, [])

  const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.current) {
      const inputCurrentRef = (input.current as HTMLInputElement)
      const rawCommand = inputCurrentRef.value
      processCommand(rawCommand)
      inputCurrentRef.value = ''
    }
  }

  const processCommand = (rawCommand) => {
    const commandResponse = useCommand(rawCommand)
    setLinesToBeDisplayed((lines) => [...lines, shellUser + " " + rawCommand, commandResponse])
  }
  return (
    <div className="my-6 w-full transition-all animate-[slide-up-grow_0.5s_ease-in-out]">
      <div className="bg-blue-lighter h-12 px-5 rounded-t-2xl flex justify-end items-center gap-3">
        <LineIcon />
        <SquareIcon />
        <XIcon
          onClick={() => {
            setShowShell(false)
          }}
        />
      </div>
      <div className="bg-blue-light text-primary min-h-fit h-[28rem] rounded-b-2xl p-3 overflow-auto text-lg">
        {linesToBeDisplayed.map((line) => (
          <p>{line}</p>
        ))}
        <div className="flex gap-2">
          {shellUser}
          <input
            ref={input}
            type="text"
            className="bg-blue-light w-full outline-none m-0 text-primary inline-flex"
            onKeyUp={(e) => {
              handleInputKeyUp(e)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Shell
