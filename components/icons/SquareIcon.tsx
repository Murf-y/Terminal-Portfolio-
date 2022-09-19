const SquareIcon: React.FC<{ width?: number; height?: number }> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 15}
      height={height ?? 18}
      fill="none"
      viewBox="0 0 15 18"
      className="transition-all hover:-translate-y-[0.1rem]"
    >
      <path stroke="#FFC13F" d="M.915 1.477h13.124v15.316H.915z" />
    </svg>
  )
}

export default SquareIcon
