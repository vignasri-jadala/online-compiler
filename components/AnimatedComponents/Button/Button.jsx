import { motion } from "framer-motion";

const Button = (props) => {

  const defaultClasses = "flex flex-row items-center h-12 px-2 rounded-lg text-gray-600 hover:bg-gray-100 outline-none focus:outline-none";
  const defaultHoverScale = 1.025;
  const defaultTapScale = 0.9;

  return (
    <motion.button
      className={props.overrideDefaultStyles ? props.className : defaultClasses}
      whileHover={{ scale: props.scaleOnHover ? props.scaleOnHover : defaultHoverScale }}
      whileTap={{ scale: props.scaleOnTap ? props.scaleOnTap : defaultTapScale }}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;