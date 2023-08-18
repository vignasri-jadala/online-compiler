import { motion } from 'framer-motion';
import { useEditorContext } from '../Editor/EditorContext';
import { useThemeBoiiContext } from '../ThemeBoii';

const fontSizes = ["fs1p0", "fs1p2", "fs1p4", "fs1p6", "fs1p8"];

const FontModifier = () => {
  const {theme} = useThemeBoiiContext();
  const { fontSize, setFontSize } = useEditorContext();

  return (
    <div className="FontModifier flex flex-row items-center justify-start">
      {fontSizes.map((size, index) => {
        return (
          <span
            className="w-auto h-auto rounded-lg bg-transparent"
            onClick={() => { setFontSize(size) }}
            key={index}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
              className={`w-8 h-8 md:w-11 md:h-11 m-1 flex flex-row items-center justify-center border-2 rounded-lg cursor-pointer select-none ${size}`}
              style={{
                backgroundColor: theme.fontModifier.backgroundColor,
                color: theme.fontModifier.color,
                borderColor: size === fontSize ? theme.fontModifier.border.selected : theme.fontModifier.border.normal,
              }}
            >
              <span className="w-auto h-auto bg-transparent">f</span>
            </motion.div>
          </span>
        );
      })}
    </div>
  );
};

export default FontModifier;