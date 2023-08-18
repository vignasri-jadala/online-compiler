import { createContext, useContext, useState } from 'react';
import DefaultCodes from './DefaultCodes';

const EditorContext = createContext(null);

const EditorContextProvider = ({ children }) => {

  const [code, setCode] = useState(DefaultCodes.cpp);
  const [mode, setMode] = useState("text/x-c++src");
  const [theme, setTheme] = useState("material");
  const [fontSize, setFontSize] = useState("fs1p0");
  const [tabSize, setTabSize] = useState(2);
  const [smartIndent, setSmartIndent] = useState(true);
  const [lineNumbersVisible, setLineNumbersVisible] = useState(true);
  const [lineWrapping, setLineWrapping] = useState(false);
  const [autoCloseTags, setAutoCloseTags] = useState(true);
  const [autoCloseBrackets, setAutoCloseBrackets] = useState(true);
  const [matchTags, setMatchTags] = useState(true);
  const [matchBrackets, setMatchBrackets] = useState(true);
  const [keymap, setKeymap] = useState("sublime");
  const [scrollPastEnd, setScrollPastEnd] = useState(false);

  const [settingsVisible, setSettingsVisible] = useState(false);
  const [codeforcesModeVisible, setCodeforcesModeVisible] = useState(false);

  const value = {
    code, setCode,
    mode, setMode,
    theme, setTheme,
    fontSize, setFontSize,
    tabSize, setTabSize,
    smartIndent, setSmartIndent,
    lineNumbersVisible, setLineNumbersVisible,
    lineWrapping, setLineWrapping,
    autoCloseTags, setAutoCloseTags,
    autoCloseBrackets, setAutoCloseBrackets,
    matchTags, setMatchTags,
    matchBrackets, setMatchBrackets,
    keymap, setKeymap,
    scrollPastEnd, setScrollPastEnd,
    settingsVisible, setSettingsVisible,
    codeforcesModeVisible, setCodeforcesModeVisible
  };

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  );
};

const EditorContextConsumer = ({ children }) => {
  return (
    <EditorContext.Consumer>
      {(context) => {
        if (context == undefined) throw new Error("Error: useEditorContext can be used only inside of EditorContext.");
        return children(context);
      }}
    </EditorContext.Consumer>
  );
}

const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (context == undefined) throw new Error("Error: useEditorContext can be used only inside of EditorContext.");
  return context;
}

export {
  EditorContextProvider,
  EditorContextConsumer,
  useEditorContext,
};