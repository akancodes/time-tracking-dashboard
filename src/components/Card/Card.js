import { MainContext, useContext } from "../../context/mainContext";
import Time from "./Time";

const Card = ({ title, image, imageAlt, color, timeframes }) => {
  const { time } = useContext(MainContext);
  let backgroundColor;

  switch (color) {
    case "light-red-work":
      backgroundColor = "bg-light-red-work";
      break;
    case "soft-blue-play":
      backgroundColor = "bg-soft-blue-play";
      break;
    case "light-red-study":
      backgroundColor = "bg-light-red-study";
      break;
    case "lime-green-exercise":
      backgroundColor = "bg-lime-green-exercise";
      break;
    case "violet-social":
      backgroundColor = "bg-violet-social";
      break;
    case "soft-orange":
      backgroundColor = "bg-soft-orange";
      break;
    default:
      backgroundColor = "bg-soft-orange";
  }

  return (
    <div>
      <div
        className={`${backgroundColor} flex justify-end items-center pr-4 rounded-t-lg overflow-hidden h-20`}
      >
        <img src={image} alt={imageAlt} className="w-18 h-max -translate-y-3" />
      </div>
      <div className="bg-dark-blue flex flex-col justify-between p-6 space-y-4 rounded-xl -translate-y-6">
        <span className="flex justify-between items-center">
          <p className="text-lg font-medium">{title}</p>
          <img
            src="images/icon-ellipsis.svg"
            alt="ellipsis"
            className="h-max"
          />
        </span>
        {time === "daily" && (
          <Time type="daily" timeframes={timeframes.daily} />
        )}
        {time === "weekly" && (
          <Time type="weekly" timeframes={timeframes.weekly} />
        )}
        {time === "monthly" && (
          <Time type="monthly" timeframes={timeframes.monthly} />
        )}
      </div>
    </div>
  );
};

export default Card;
