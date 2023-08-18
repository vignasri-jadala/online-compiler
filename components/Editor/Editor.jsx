import { StrictMode } from 'react';
import CodeMirrorComponent from './CodeMirrorComponent.jsx';

const Editor = () => {
  return (
    <StrictMode>
      <CodeMirrorComponent />
    </StrictMode>
  );
};

export default Editor;