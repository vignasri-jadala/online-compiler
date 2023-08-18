import BaseTextArea from '../BaseTextArea/BaseTextArea';
import { useConsoleContext } from '../ConsoleContext';
import { useThemeBoiiContext } from '../../ThemeBoii';
import SpinningLoader from '../../SpinningLoader';

const Output = () => {
  const { output } = useConsoleContext();
  const {theme} = useThemeBoiiContext();

  return (
    <div
      className="flex flex-col w-full h-full rounded-xl Output"
      style={{backgroundColor: theme.output.titlebar.backgroundColor}}
    >
      <span
        className="mx-4 my-3 text-xl text-green-400 select-none"
        style={{color: theme.output.titlebar.color}}
      >
        Output
      </span>
      {output === "fetching"
        ? <SpinningLoader color={theme.output.titlebar.color} />
        : <BaseTextArea
            readOnly={true}
            value={output}
          />}
    </div>
  )
}

export default Output;