const LineIcon: React.FC<{ width?: number; height?: number }> = ({
  width,
  height,
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ?? 15} height={height ?? 4} fill="none" viewBox="0 0 17 4">
      <path stroke="#2ACA3E" stroke-width="2.5" d="M.131 2.051h16.142" />
    </svg>
  )
}

export default LineIcon
