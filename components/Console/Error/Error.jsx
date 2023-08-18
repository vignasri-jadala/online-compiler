import BaseTextArea from "../BaseTextArea/BaseTextArea";
import { useConsoleContext } from '../ConsoleContext';
import { useThemeBoiiContext } from "../../ThemeBoii";
import SpinningLoader from "../../SpinningLoader";

const Error = () => {
  const { errors } = useConsoleContext();
  const {theme} = useThemeBoiiContext();

  return (
    <div
      className="flex flex-col w-full h-full rounded-xl Error"
      style={{backgroundColor: theme.errors.titlebar.backgroundColor}}
    >
      <span
        className="mx-4 my-3 text-xl select-none"
        style={{color: theme.errors.titlebar.color}}
      >
        Errors
      </span>
      {errors === "fetching"
        ? <SpinningLoader color={theme.errors.titlebar.color} />
        : <BaseTextArea
            readOnly={true}
            value={errors}
          />}
    </div>
  )
}

export default Error;