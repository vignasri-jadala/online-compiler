import { motion } from 'framer-motion';
import { Dropdown, Toggle } from "../AnimatedComponents";
import { Close } from '../Icons';
import FontModifier from '../FontModifier';
import {
  useThemeBoiiContext,
  getThemeNames,
  getEditorThemeNames,
  getThemeByName
} from "../ThemeBoii";
import {
  useEditorContext,
  getLanguageNames,
  getLanguageFromEditorMode,
  getEditorModeFromLanguage,
  getDefaultCodeFromEditorMode
} from "../Editor";

const Settings = () => {

  const {
    lineNumbersVisible, setLineNumbersVisible,
    lineWrapping, setLineWrapping,
    autoCloseTags, setAutoCloseTags,
    autoCloseBrackets, setAutoCloseBrackets,
    matchTags, setMatchTags,
    matchBrackets, setMatchBrackets,
    mode, setMode,
    scrollPastEnd, setScrollPastEnd,
    setSettingsVisible,
    setCode
  } = useEditorContext();
  const {theme, setTheme} = useThemeBoiiContext();

  const getSelectedTheme = (index) => {
    setTheme(getThemeByName(getEditorThemeNames()[index]));
  }

  const getSelectedLanguage = (index) => {
    setMode(() => {
      const newMode = getEditorModeFromLanguage(getLanguageNames()[index]);
      setCode(getDefaultCodeFromEditorMode(newMode));
      return newMode;
    });
  }

  return (
    <div
      className="Settings w-10/12 md:w-9/12 lg:w-8/12 p-5 rounded-xl"
      style={{backgroundColor: theme.settings.titlebar.backgroundColor}}
    >
      <div className="flex flex-row justify-between items-center p-1 mb-4">
        <span
          className="mr-4 text-xl select-none"
          style={{color: theme.settings.titlebar.color}}
        >
          Settings
        </span>
        <motion.span
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          className="rounded-full hover:bg-gray-600 p-1"
          onClick={() => setSettingsVisible(false)}
          style={{
            cursor: "pointer",
          }}
        >
          <Close />
        </motion.span>
      </div>
      <div className="flex flex-row justify-between items-center p-1">
        <span className="mr-4 text-gray-400 text-xl select-none">Language</span>
        <Dropdown
          items={getLanguageNames()}
          defaultItem={getLanguageFromEditorMode(mode)}
          getSelectedItem={getSelectedLanguage}
        />
      </div>
      <div className="flex flex-row justify-between items-center p-1">
        <span className="mr-4 text-gray-400 text-xl select-none">Theme</span>
        <Dropdown
          items={getThemeNames()}
          defaultItem={theme.name}
          getSelectedItem={getSelectedTheme}
        />
      </div>
      <div className="flex flex-row justify-between items-center p-1">
        <span className="mr-4 text-gray-400 text-xl select-none">Font size</span>
        <FontModifier />
      </div>
      <div className="flex flex-row justify-between items-center p-1 my-1">
        <span className="mr-4 text-gray-400 text-xl select-none">Line Numbers</span>
        <Toggle
          initialState={lineNumbersVisible}
          offFunc={() => setLineNumbersVisible(false)}
          onFunc={() => setLineNumbersVisible(true)}
          transitionType="tween"
        />
      </div>
      <div className="flex flex-row justify-between items-center p-1 my-1">
        <span className="mr-4 text-gray-400 text-xl select-none">Line Wrapping</span>
        <Toggle
          initialState={lineWrapping}
          offFunc={() => setLineWrapping(false)}
          onFunc={() => setLineWrapping(true)}
          transitionType="tween"
        />
      </div>
      <div className="flex flex-row justify-between items-center p-1 my-1">
        <span className="mr-4 text-gray-400 text-xl select-none">Auto close Tags</span>
        <Toggle
          initialState={autoCloseTags}
          offFunc={() => setAutoCloseTags(false)}
          onFunc={() => setAutoCloseTags(true)}
          transitionType="tween"
        />
      </div>
      <div className="flex flex-row justify-between items-center p-1 my-1">
        <span className="mr-4 text-gray-400 text-xl select-none">Auto close Brackets</span>
        <Toggle
          initialState={autoCloseBrackets}
          offFunc={() => setAutoCloseBrackets(false)}
          onFunc={() => setAutoCloseBrackets(true)}
          transitionType="tween"
        />
      </div>
      <div className="flex flex-row justify-between items-center p-1 my-1">
        <span className="mr-4 text-gray-400 text-xl select-none">Match Tags</span>
        <Toggle
          initialState={matchTags}
          offFunc={() => setMatchTags(false)}
          onFunc={() => setMatchTags(true)}
          transitionType="tween"
        />
      </div>
      <div className="flex flex-row justify-between items-center p-1 my-1">
        <span className="mr-4 text-gray-400 text-xl select-none">Match Brackets</span>
        <Toggle
          initialState={matchBrackets}
          offFunc={() => setMatchBrackets(false)}
          onFunc={() => setMatchBrackets(true)}
          transitionType="tween"
        />
      </div>
      <div className="flex flex-row justify-between items-center p-1 my-1">
        <span className="mr-4 text-gray-400 text-xl select-none">Scroll Past End</span>
        <Toggle
          initialState={scrollPastEnd}
          offFunc={() => setScrollPastEnd(false)}
          onFunc={() => setScrollPastEnd(true)}
          transitionType="tween"
        />
      </div>
    </div>
  );
};

export default Settings;