import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DropdownItem from './DropdownItem/DropdownItem';
import ChevronDown from '../../Icons/ChevronDown.jsx';
import { EditorThemes } from '../../Editor/Themes';
import { useThemeBoiiContext } from '../../ThemeBoii';

const downUp = {
  hidden: {
    y: "-20vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    // y: "-50vh",
    opacity: 0,
  },
};

const Dropdown = (props) => {
  const {theme} = useThemeBoiiContext();
  const [selectedItem, setSelectedItem] = useState(props.defaultItem);
  const [itemsVisible, setItemsVisible] = useState(false);

  const handleItemClicked = (index) => {
    // console.log("index: ", index);
    setSelectedItem(props.items[index]);
    // console.log("selected item: ", selectedItem);
    setItemsVisible(false);
    props.getSelectedItem(index);
  }

  // console.log("selected: ", selectedItem, props.items);

  return (
    <div className="Dropdown relative inline-block text-left ml-10">
      <div onClick={() => { setItemsVisible(!itemsVisible) }}>
        <motion.button
          className="inline-flex items-center justify-center w-full rounded-lg px-4 py-2 text-base font-medium focus:outline-none select-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.85 }}
          style={{
            backgroundColor: theme.dropdown.selectedItem.backgroundColor,
            color: theme.dropdown.selectedItem.color
          }}
        >
          <span className="mr-2">{selectedItem}</span>
          <ChevronDown />
        </motion.button>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {itemsVisible && <motion.div
          className="origin-top-right absolute right-0 mt-1 w-52 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: theme.dropdown.item.backgroundColor,
          }}
          variants={downUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="DropdownList p-1.5 max-h-80 overflow-y-scroll bg-scroll">
            {props.items.map((item, index) => {
              return <DropdownItem
                onClick={handleItemClicked}
                key={index}
                index={index}
                // selected={selectedItem === EditorThemes[index]}
                selected={selectedItem === item}
              >
                {item}
              </DropdownItem>
            })}
          </div>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown;