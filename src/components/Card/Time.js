import { MainContext, useContext } from "../../context/mainContext";

const Time = ({ type, timeframes }) => {
  const { time } = useContext(MainContext);
  return (
    <span className="flex md:flex-col md:items-start md:justify-start justify-between items-center">
      {type === "daily" && (
        <>
          <p className="text-3xl font-light md:text-4xl">
            {timeframes.current}hrs
          </p>
          <p className="text-pale-blue md:text-xs">
            Last Day - {timeframes.previous}hrs
          </p>
        </>
      )}
      {type === "weekly" && (
        <>
          <p className="text-3xl font-light md:text-4xl">
            {timeframes.current}hrs
          </p>
          <p className="text-pale-blue md:text-xs">
            Last Week - {timeframes.previous}hrs
          </p>
        </>
      )}
      {type === "monthly" && (
        <>
          <p className="text-3xl font-light md:text-4xl">
            {timeframes.current}hrs
          </p>
          <p className="text-pale-blue md:text-xs min-w-max">
            Last Month - {timeframes.previous}hrs
          </p>
        </>
      )}
    </span>
  );
};

export default Time;
