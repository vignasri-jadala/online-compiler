import Play from "../Icons/Play";

const Logo = () => {
  return (
    <span className="flex flex-row items-center h-14 px-4 rounded-lg text-gray-400">
      {/* <Play /> */}
      {/* <span>Logo</span> */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className=" h-14 w-14"
      >
        <rect width="400" height="400" rx="100" fill="#E5B2ED"/>
        <path d="M296.303 177.583C313.03 187.1 313.181 211.156 296.575 220.883L147.124 308.429C130.518 318.156 109.609 306.259 109.488 287.014L108.398 113.813C108.276 94.5681 129.034 82.4091 145.761 91.9265L296.303 177.583Z" fill="#CC00FF"/>
      </svg>
    </span>
  )
}

export default Logo;