import { useEffect, useRef } from "react"

const useDidMount = (action :() => void) => {
  const isCalledRef =useRef(false)

  useEffect(() => {
    if (!isCalledRef.current) {
      isCalledRef.current = true
      action()
    }
  }, [action])
}

export default useDidMount