import BaseTextArea from '../BaseTextArea/BaseTextArea';
import { useConsoleContext } from '../ConsoleContext';
import { useThemeBoiiContext } from '../../ThemeBoii';

const Input = () => {
  const { input, setInput } = useConsoleContext();
  const {theme} = useThemeBoiiContext();

  return (
    <div
      className="flex flex-col w-full h-full Input rounded-xl"
      style={{backgroundColor: theme.input.titlebar.backgroundColor}}
    >
      <span className="flex flex-row items-center justify-start w-full">
        <span
          className="flex-1 mx-4 my-3 text-xl select-none"
          style={{color: theme.input.titlebar.color}}
        >
          Input
        </span>
      </span>
      <BaseTextArea
        readOnly={false}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={"Input for the program ..."}
      />
    </div>
  )
}

export default Input;