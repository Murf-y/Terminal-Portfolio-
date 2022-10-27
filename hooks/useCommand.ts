import { availableFiles, availableMarkdown, COMMANDS_TEMPLATE, COMMAND_NOT_FOUND, FILE_NOT_FOUND, INTERACTIVE_COMMANDS } from '@models/command'

const useCommand = (
  rawCommand: string,
  showMarkdown: (s: string) => void,
  openFile: (s: string) => void,
  clear: () => void
) => {
  const commandSkeleton = rawCommand.trim().toUpperCase().split(' ')[0]

  if (INTERACTIVE_COMMANDS.includes(commandSkeleton)) {
    switch (commandSkeleton) {
      case 'SHOW':{
        if(availableMarkdown.some((markdownFileName) => rawCommand.toUpperCase().split(' ')[1] === markdownFileName)){
            return showMarkdown(rawCommand)
        }
        return FILE_NOT_FOUND
      }
      case 'OPEN':
        if(availableFiles.some((markdownFileName) => rawCommand.toUpperCase().split(' ')[1] === markdownFileName)){
            return openFile(rawCommand)
        }
        return FILE_NOT_FOUND
      case 'CLEAR':
        clear()
        break
    }
  }
  return COMMANDS_TEMPLATE[commandSkeleton] ?? COMMAND_NOT_FOUND
}

export default useCommand
