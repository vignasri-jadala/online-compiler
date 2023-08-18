import { createContext, useContext, useState } from 'react';
import { useEditorContext } from '../Editor/EditorContext';

const ConsoleContext = createContext(null);

const ConsoleContextProvider = ({ children }) => {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState("No errors 😎");

  const { code } = useEditorContext();

  const handleRun = async (e) => {
    e.preventDefault();
    fetch("https://edit-and-run.herokuapp.com/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: code,
        language: "cpp",
        input: input,
      })
    })
      .then((res) => { return res.json() })
      .then((body) => {
        if (body.error == null && body.output.slice(0, 12) != "./Playground") {
          // console.log("body: ", body);
          setOutput(body.output);
          setErrors("No Errors :)");
        }
        else {
          setErrors(body.output);
        }
      })
      .catch((error) => {
        setErrors(error);
      });
  }

  const value = {
    input, setInput,
    output, setOutput,
    errors, setErrors,
    handleRun
  };

  return (
    <ConsoleContext.Provider value={value}>
      {children}
    </ConsoleContext.Provider>
  );
};

const ConsoleContextConsumer = ({ children }) => {
  return (
    <ConsoleContext.Consumer>
      {(context) => {
        if (context == undefined) {
          throw new Error("Error: useConsoleContext can only be used inside of ConsoleContext")
        }
        return children(context);
      }}
    </ConsoleContext.Consumer>
  );
};

const useConsoleContext = () => {
  const context = useContext(ConsoleContext);
  if (context == undefined) {
    throw new Error("Error: useConsoleContext can only be used inside of ConsoleContext");
  }
  return context;
};

export {
  ConsoleContextProvider,
  ConsoleContextConsumer,
  useConsoleContext,
};