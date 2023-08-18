import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useThemeBoiiContext } from '../../../ThemeBoii';

const DropdownItem = (props) => {
  const {theme} = useThemeBoiiContext();
  const [background, setBackground] = useState(theme.dropdown.item.backgroundColor);

  useEffect(() => {
    setBackground(theme.dropdown.item.backgroundColor);
  }, [theme]);

  const handleClick = () => {
    props.onClick(props.index);
  }

  return (
    <span
      onClick={handleClick}
    >
      <motion.span
        whileTap={{ scale: 0.85 }}
        className="block px-4 py-2 text-sm hover:bg-gray-600 rounded-lg select-none"
        style={{
          backgroundColor: background,
          color: theme.dropdown.item.color
        }}
        onMouseOver={() => setBackground(theme.dropdown.item.hover.backgroundColor)}
        onMouseLeave={() => setBackground(theme.dropdown.item.backgroundColor)}
      >
        {props.children}
      </motion.span>
    </span>
  )
};

export default DropdownItem;