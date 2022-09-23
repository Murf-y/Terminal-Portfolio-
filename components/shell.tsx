import useCommand from '@hooks/useCommand'
import useDidMount from '@hooks/useDidMount'
import { COMMANDS_TEMPLATE } from '@models/commands'
import Router from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { threadId } from 'worker_threads'
import LineIcon from './icons/LineIcon'
import SquareIcon from './icons/SquareIcon'
import XIcon from './icons/XIcon'

const shellInit = ['Portfolio [Version 2.0.4]', '(c) Murf-y Corporation. All rights reserved']

const shellUser = 'C:\\Users\\Murf>'

const commandsAtStartup = ['dir', 'help']

const Shell: React.FC<{ setShowShell }> = ({ setShowShell }) => {
  let [linesToBeDisplayed, setLinesToBeDisplayed] = useState<String[]>(shellInit)

  const input = useRef(null)
  const shellRef = useRef(null)

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
      const inputCurrentRef = input.current as HTMLInputElement
      const rawCommand = inputCurrentRef.value
      processCommand(rawCommand)
      inputCurrentRef.value = ''
      scrollDown()
    }
  }

  const scrollDown = () => {
    if (shellRef.current) {
      const shellRefCurrent = shellRef.current as HTMLDivElement
      window.requestAnimationFrame(function () {
        shellRefCurrent.scrollTo(
          0,
          shellRefCurrent.scrollHeight + (shellRefCurrent.lastElementChild?.scrollHeight ?? 0) + 200
        )
      })
    }
    
  }

  const processCommand = (rawCommand) => {
    const commandResponse: string = useCommand(rawCommand, showMarkdown, openFile, clear);
    const commandResponseInLines: string[] = commandResponse.split('\n');
    let commandsResponsePlusRequestLines = [shellUser + ' ' + rawCommand]
    commandsResponsePlusRequestLines = commandsResponsePlusRequestLines.concat(commandResponseInLines)
    setLinesToBeDisplayed((lines) => [...lines, ...commandsResponsePlusRequestLines])
  }

  const showMarkdown = (command: string) => {
    const fileName = command.split(' ')[1]

    Router.push('/about')
    return COMMANDS_TEMPLATE.SHOW
  }

  const openFile = (command: string) => {

    return COMMANDS_TEMPLATE.OPEN
  }

  const clear = () => {
    setTimeout(() => {
      setLinesToBeDisplayed((lines) => [...lines.slice(0, 2)])
    }, 100)
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
      <div className="bg-blue-light text-primary min-h-fit h-[28rem] rounded-b-2xl p-3 overflow-auto text-lg" ref={shellRef}>
        {linesToBeDisplayed.map((line, i) => (
          <p key={i} className={line.startsWith("C:\\") ? "pt-4": ""}>{line}</p>
        ))}
        <div className="flex gap-2 pt-4">
          {shellUser}
          <input
            ref={input}
            type="text"
            defaultValue={"SHOW about.md"}
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
