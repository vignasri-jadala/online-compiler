import { motion } from "framer-motion";
import { useEditorContext } from "../Editor";
import { useThemeBoiiContext } from "../ThemeBoii";
import { Close } from "../Icons";

const CodeforcesMode = () => {
  const {theme} = useThemeBoiiContext();
  const {setCodeforcesModeVisible} = useEditorContext();

  return (
    <div
      className="CodeforcesMode w-10/12 md:w-9/12 lg:w-8/12 p-5 rounded-xl"
      style={{backgroundColor: theme.settings.titlebar.backgroundColor}}
    >
      <div className="flex flex-row justify-between items-center p-1 mb-4">
        <span
          className="mr-4 text-xl select-none"
          style={{color: theme.settings.titlebar.color}}
        >
          Codeforces Mode
        </span>
        <motion.span
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          className="rounded-full hover:bg-gray-600 p-1"
          onClick={() => setCodeforcesModeVisible(false)}
          style={{
            cursor: "pointer",
          }}
        >
          <Close />
        </motion.span>
      </div>
      <div className="flex flex-row justify-start items-center p-1 mb-1">
        <span className="mr-4 text-gray-400 text-xl select-none">
          This mode will be rolling out in the next update 😅
        </span>
      </div>
      <div className="flex flex-row justify-start items-center p-1 mb-1">
        <span className="mr-4 text-xl select-none">👉 </span>
        <span className="mr-4 text-gray-400 text-xl select-none">
          Can view the whole Codeforces page and Editor side by side.
        </span>
      </div>
      <div className="flex flex-row justify-start items-center p-1 mb-1">
        <span className="mr-4 text-xl select-none">👉 </span>
        <span className="mr-4 text-gray-400 text-xl select-none">
          Testcases will be parsed from the Problem page and
          Input, Output consoles will be replaced by Testcases 👌
          Code execution will be iterated over all test cases.
        </span>
      </div>
      <div className="flex flex-row justify-start items-center p-1 mb-1">
        <span className="mr-4 text-xl select-none">👉 </span>
        <span className="mr-4 text-gray-400 text-xl select-none">
          Next update may also have User Authentication 😃
          Helps to restore the code, mode, layout and theme of the last session.
        </span>
      </div>
    </div>
  );
};

export default CodeforcesMode;