import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useThemeBoiiContext } from "../../ThemeBoii";

const SidebarIcon = ({children, onClick}) => {
  const { theme } = useThemeBoiiContext();
  const [background, setBackground] = useState(theme.sidebarIcon.backgroundColor);

  useEffect(() => {
    setBackground(theme.sidebarIcon.backgroundColor);
  }, [theme]);

  const handleHover = () => {
    setBackground(theme.sidebarIcon.hover.backgroundColor);
  }
  const handleLeave = () => {
    setBackground(theme.sidebarIcon.backgroundColor);
  }

  return (
    <motion.div
      style={{
        backgroundColor: background,
      }}
      className="flex flex-row items-center justify-center p-3 rounded-lg cursor-pointer"
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.85}}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default SidebarIcon;