import { motion } from "framer-motion";

const BackDrop = (props) => {
  return (
    <motion.div
      className="Backdrop flex flex-row items-center justify-center absolute top-0 left-0 w-screen h-screen z-50"
      onClick={props.onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  )
}

export default BackDrop;