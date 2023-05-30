import useCommand from '@hooks/useCommand'
import useDidMount from '@hooks/useDidMount'
import { COMMANDS_TEMPLATE } from '@models/command'
import Router from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import LineIcon from './icons/LineIcon'
import SquareIcon from './icons/SquareIcon'
import XIcon from './icons/XIcon'

const shellInit = ['Portfolio [Version 2.0.3]', '(c) Murf-y Corporation. All rights reserved']

const shellUser = 'C:\\Users\\Murf>'

const commandsAtStartup = ['dir', 'help']

const Shell: React.FC<{ setShowShell }> = ({ setShowShell }) => {
  const [linesToBeDisplayed, setLinesToBeDisplayed] = useState<string[]>(shellInit)

  const [prevCommands, setPrevCommands] = useState<string[]>([])
  const [prevCommandsIndex, setPrevCommandsIndex] = useState<number>(0)

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
    if (e.key === 'ArrowUp') {
      if (prevCommandsIndex > 0) {
        setPrevCommandsIndex((prev) => prev - 1)
        if (input.current) {
          const inputCurrentRef = input.current as HTMLInputElement
          inputCurrentRef.value = prevCommands[prevCommandsIndex - 1]
        }
      }
    }
    if (e.key === 'ArrowDown') {
      if (prevCommandsIndex < prevCommands.length - 1) {
        setPrevCommandsIndex((prev) => prev + 1)
        if (input.current) {
          const inputCurrentRef = input.current as HTMLInputElement
          inputCurrentRef.value = prevCommands[prevCommandsIndex + 1]
        }
      }
    }

    if (e.key === 'Enter' && input.current) {
      const inputCurrentRef = input.current as HTMLInputElement
      const rawCommand = inputCurrentRef.value
      processCommand(rawCommand)
      inputCurrentRef.value = ''
      scrollDown()
      setPrevCommands((prev) => [...prev, rawCommand])
      setPrevCommandsIndex((prev) => prev + 1)
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
    const commandResponse: string = useCommand(rawCommand, showMarkdown, openFile, clear)
    const commandResponseInLines: string[] = commandResponse.split('\n')
    let commandsResponsePlusRequestLines = [shellUser + ' ' + rawCommand]
    commandsResponsePlusRequestLines =
      commandsResponsePlusRequestLines.concat(commandResponseInLines)
    setLinesToBeDisplayed((lines) => [...lines, ...commandsResponsePlusRequestLines])
  }

  const showMarkdown = (command: string) => {
    const fileName = command.split(' ')[1]

    Router.push(`/${fileName.split('.')[0]}`)
    return COMMANDS_TEMPLATE.SHOW
  }

  const openFile = (command: string) => {

    const file = command.split(' ')[1]
    if (file === 'resume.pdf') {
      window.open('/data/resume.pdf', '_blank')
    }

    if (file === 'contact.exe') {
      window.open('mailto:charbel.fayad01@lau.edu?subject=Greetings', '_blank')
    }
    return COMMANDS_TEMPLATE.OPEN
  }

  const clear = () => {
    setTimeout(() => {
      setLinesToBeDisplayed((lines) => [...lines.slice(0, 2)])
    }, 100)
  }
  return (
    <div className="my-6 w-full transition-all animate-[slide-up-grow_0.5s_ease-in-out]">
      <div className="bg-blue-lighter h-12 px-5 rounded-t-2xl flex justify-end items-center gap-3 border-b-blue border-b-4">
        <LineIcon />
        <SquareIcon />
        <XIcon
          onClick={() => {
            setShowShell(false)
          }}
        />
      </div>
      <div
        className="bg-blue-light text-primary min-h-fit h-[28rem] rounded-b-2xl p-3 overflow-auto text-sm md:text-lg scrollbar"
        ref={shellRef}
      >
        {linesToBeDisplayed.map((line, i) => (
          <p key={i} className={line.startsWith('C:\\') ? 'pt-4' : ''}>
            {line}
          </p>
        ))}
        <div className="flex gap-2 pt-4">
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
