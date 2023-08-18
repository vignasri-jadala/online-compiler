import Editor from "./Editor";
import {
  EditorContextProvider,
  EditorContextConsumer,
  useEditorContext,
  initCode
} from "./EditorContext";
import {
  EditorModes,
  getLanguageNames,
  getLanguageFromEditorMode,
  getEditorModeFromLanguage,
  getAPILanguageFromEditorMode,
  getRapidApiLanguageChoiceFromEditorMode,
  getDefaultCodeFromEditorMode
} from "./Modes";
import KeyBindings from "./Shortcuts";

export {
  Editor,
  EditorContextProvider,
  EditorContextConsumer,
  useEditorContext,
  initCode,
  EditorModes,
  getLanguageNames,
  getLanguageFromEditorMode,
  getEditorModeFromLanguage,
  getAPILanguageFromEditorMode,
  getRapidApiLanguageChoiceFromEditorMode,
  getDefaultCodeFromEditorMode,
  KeyBindings
};