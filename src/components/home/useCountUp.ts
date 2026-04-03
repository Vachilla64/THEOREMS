import { useEffect, useState } from "react"

export function useCountUp(
  target: number,
  options: { duration?: number; enabled?: boolean } = {},
) {
  const { duration = 1800, enabled = true } = options
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!enabled) return
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - t) ** 3
      setValue(Math.round(eased * target))
      if (t < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [target, duration, enabled])
  return value
}
