const SpinningLoader = ({color}) => {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div
          className="animate-spin rounded-full h-20 w-20 border-t-4"
          style={{
            borderColor: color
          }}
        ></div>
      </div>
    );
  };
  
  export default SpinningLoader;