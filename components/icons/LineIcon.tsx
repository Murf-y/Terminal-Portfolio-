const LineIcon: React.FC<{ width?: number; height?: number }> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 15}
      height={height ?? 4}
      fill="none"
      viewBox="0 0 17 4"
      className="transition-all hover:-translate-y-[0.1rem]"
    >
      <path stroke="#2ACA3E" strokeWidth="2.5" d="M.131 2.051h16.142" />
    </svg>
  )
}

export default LineIcon
