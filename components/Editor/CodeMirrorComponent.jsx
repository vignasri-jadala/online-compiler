import dynamic from 'next/dynamic';
import { useEditorContext } from './EditorContext';
import { useThemeBoiiContext } from '../ThemeBoii';

const CodeMirror = dynamic(() => {
  // import CodeMirror from 'react-codemirror';
  // Language Support
  import ('codemirror/mode/clike/clike')
  import ('codemirror/mode/rust/rust')
  import ('codemirror/mode/javascript/javascript')
  import ('codemirror/mode/python/python')
  import ('codemirror/mode/go/go')
  // Addons
  import ('codemirror/addon/display/autorefresh')
  import ('codemirror/addon/edit/closetag')
  import ('codemirror/addon/edit/matchtags')
  import ('codemirror/addon/edit/closebrackets')
  import ('codemirror/addon/edit/matchbrackets')
  import ('codemirror/addon/scroll/simplescrollbars')
  import ('codemirror/addon/scroll/scrollpastend')
  import ('codemirror/addon/search/jump-to-line')
  import ('codemirror/addon/search/match-highlighter')
  import ('codemirror/addon/search/matchesonscrollbar')
  import ('codemirror/addon/search/search')
  import ('codemirror/addon/search/searchcursor')
  import ('codemirror/keymap/sublime')
  import ('codemirror/keymap/vim')
  import ('codemirror/keymap/emacs')
  import ('codemirror/addon/comment/comment')
  import ('codemirror/addon/comment/continuecomment')
  return import('react-codemirror')
}, { ssr: false });

const CodeMirrorComponent = () => {

  const {
    code, setCode,
    mode,
    fontSize,
    tabSize,
    smartIndent,
    lineNumbersVisible,
    lineWrapping,
    autoCloseTags,
    autoCloseBrackets,
    matchTags,
    matchBrackets,
    scrollPastEnd,
    keymap
  } = useEditorContext();
  const { theme } = useThemeBoiiContext();
  
  return (
    CodeMirror && <div className="flex-1 CodeMirrorComponent">
      <CodeMirror
        value={code}
        onChange={(newCode) => setCode(newCode)}
        options={{
          theme: `${theme.editor} ${fontSize}`,
          mode: mode,
          lineNumbers: lineNumbersVisible,
          tabSize: tabSize,
          smartIndent: smartIndent,
          lineWrapping: lineWrapping,
          autoCloseTags: autoCloseTags,
          autoCloseBrackets: autoCloseBrackets,
          matchTags: matchTags,
          matchBrackets: matchBrackets,
          keyMap: keymap,
          autofocus: true,
          autoRefresh: true,
          scrollPastEnd: scrollPastEnd,
          scrollbarStyle: "overlay",
        }}
      />
    </div>
  );
};

export default CodeMirrorComponent;