import { motion } from "motion/react"

const BlockCursor = () => {
  return (
    <motion.span
      aria-hidden
      className={`inline-block bg-accent align-text-bottom`}
      style={{ width: "0.55em", height: "1em", marginLeft: "0.15em" }}
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 2,
        times: [0, 0.5, 0.5, 1],
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}

export default BlockCursor
