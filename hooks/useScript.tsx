import { useEffect, useRef } from 'react'

export type UserScriptProps = {
  src: string
  id: string
  onLoad?: () => void
}

const addScript = ({ src, id, onLoad }: UserScriptProps) => {
  const existing = document.getElementById(id)
  if (existing) {
    return existing
  }
  const script = document.createElement('script')
  script.src = src
  script.id = id
  script.async = true
  script.onload = () => {
    if (onLoad) {
      onLoad()
    }
  }
  document.body.appendChild(script)
  return script
}

const removeScript = ({ id }: { id: string }) => {
  const script = document.getElementById(id)
  if (script) {
    document.body.removeChild(script)
  }
}

export const useScript = (props: UserScriptProps) => {
  const prevScript = useRef<UserScriptProps | null>()

  useEffect(() => {
    if (prevScript.current) {
      return
    }
    prevScript.current = props
    addScript(props)

    // I feel like we want to remove the script if a new one comes in? I'm not real sure TBH
    return () => {
      prevScript.current?.id != null &&
        removeScript({ id: prevScript.current.id })
    }
  }, [props])
}
