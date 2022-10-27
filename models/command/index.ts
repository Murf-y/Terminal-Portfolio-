const COMMANDS_TEMPLATE = {
  HELP: 'SHOW ---- Display a Markdown file (.md)\nOPEN ---- Opens an executabe or pdf (.pdf, .exe)',
  DIR: ' Directory of C:\\Users\\Murf\n --- about.md\n --- projects.md\n --- contact.exe\n --- resume.pdf',
  SHOW: 'Loading ...\nShowing...',
  OPEN: 'Loading ...\nOpening...',
  CLEAR: '',
}

const availableMarkdown: string[] = ['ABOUT.MD', 'PROJECTS.MD']
const availableFiles: string[] = ['CONTACT.EXE', 'RESUME.PDF']

const INTERACTIVE_COMMANDS: string[] = ['SHOW', 'OPEN', 'CLEAR']

const COMMAND_NOT_FOUND: string = 'Command Not Found, use help to find available commands!'
const FILE_NOT_FOUND: string = 'File Not Found, use dir to find files in this directory!'


export {
  COMMANDS_TEMPLATE,
  COMMAND_NOT_FOUND,
  FILE_NOT_FOUND,
  INTERACTIVE_COMMANDS,
  availableMarkdown,
  availableFiles,
}
