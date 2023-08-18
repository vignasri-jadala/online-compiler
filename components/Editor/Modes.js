import DefaultCodes from "./DefaultCodes";

const EditorModes = {
  c: {
    languageName: "C",
    editorModeName: "text/x-csrc",
    pistonRuntimeName: "c",
    rapidAPILanguageChoice: 6,
    defaultCode: DefaultCodes.c,
  },
  cpp: {
    languageName: "C++",
    editorModeName: "text/x-c++src",
    pistonRuntimeName: "cpp",
    rapidAPILanguageChoice: 7,
    defaultCode: DefaultCodes.cpp,
  },
  rust: {
    languageName: "Rust",
    editorModeName: "text/x-rustsrc",
    pistonRuntimeName: "rs",
    rapidAPILanguageChoice: 46,
    defaultCode: DefaultCodes.rust,
  },
  javascript: {
    languageName: "Javascript",
    editorModeName: "text/javascript",
    pistonRuntimeName: "js",
    rapidAPILanguageChoice: 17,
    defaultCode: DefaultCodes.javascript,
  },
  // typescript: {
  //   language: "Typescript",
  //   editorModeName: "text/x-typescript",
  //   pistonRuntimeName: "ts",
  //   rapidAPILanguageChoice: 60,
  // },
  python: {
    languageName: "Python",
    editorModeName: "text/x-python",
    pistonRuntimeName: "py",
    rapidAPILanguageChoice: 5,
    defaultCode: DefaultCodes.python,
  },
  go: {
    languageName: "Go",
    editorModeName: "text/x-go",
    pistonRuntimeName: "go",
    rapidAPILanguageChoice: 20,
    defaultCode: DefaultCodes.go,
  },
  // java: {
  //   languageName: "Java",
  //   editorModeName: "text/x-java",
  //   pistonRuntimeName: "java",
  //   rapidAPILanguageChoice: 4,
  // },
};

const getLanguageNames = () => {
  let names = [];
  Object.values(EditorModes).forEach(({ languageName }) => names.push(languageName));
  return names;
};

const getLanguageFromEditorMode = (mode) => {
  for (const { editorModeName, languageName } of Object.values(EditorModes)) {
    if (editorModeName === mode)
      return languageName;
  }
  throw new Error(`Mode: ${mode} is not supported`);
};

const getEditorModeFromLanguage = (language) => {
  for (const { editorModeName, languageName } of Object.values(EditorModes)) {
    if (languageName === language)
      return editorModeName;
  }
  throw new Error(`Language: ${language} is not supported`);
};

const getAPILanguageFromEditorMode = (mode) => {
  for (const { editorModeName, pistonRuntimeName } of Object.values(EditorModes)) {
    if (editorModeName === mode)
      return pistonRuntimeName;
  }
  throw new Error(`Mode: ${mode} is not supported!!!`);
};

const getRapidApiLanguageChoiceFromEditorMode = (mode) => {
  for (const { editorModeName, rapidAPILanguageChoice } of Object.values(EditorModes)) {
    if (editorModeName === mode)
      return rapidAPILanguageChoice;
  }
  throw new Error(`Mode: ${mode} is not supported!!!`);
};

const getDefaultCodeFromEditorMode = (mode) => {
  for (const { editorModeName, defaultCode } of Object.values(EditorModes)) {
    if (editorModeName === mode)
      return defaultCode;
  }
  throw new Error(`Mode: ${mode} is not supported!!!`);
};

export {
  EditorModes,
  getLanguageNames,
  getLanguageFromEditorMode,
  getEditorModeFromLanguage,
  getAPILanguageFromEditorMode,
  getRapidApiLanguageChoiceFromEditorMode,
  getDefaultCodeFromEditorMode
};