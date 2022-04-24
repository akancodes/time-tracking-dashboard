import { MainContext, useContext } from "../context/mainContext";

const User = ({ name }) => {
  const { setTime } = useContext(MainContext);

  return (
    <div className="mb-6 md:h-max md:row-span-2">
      <span className="flex md:flex-col md:items-start md:space-y-8 items-center justify-center bg-custom-blue space-x-4 md:space-x-0 p-6 rounded-lg translate-y-2">
        <img
          src="images/image-jeremy.png"
          alt="jeremy"
          className="border-4 rounded-full w-20"
        />
        <span>
          <p>Report for</p>
          <p className="text-xl md:text-3xl font-light font-Rubik">{name}</p>
        </span>
      </span>
      <span className="flex md:flex-col md:items-start sm:space-x-20 md:space-y-3 space-x-16 md:space-x-0 text-lg justify-center bg-dark-blue py-3 pt-5 md:pl-6 rounded-b-lg text-desaturated-blue">
        <button
          onClick={() => {
            setTime("daily");
          }}
          className="hover:text-pale-blue "
        >
          Daily
        </button>
        <button
          onClick={() => {
            setTime("weekly");
          }}
          className="hover:text-pale-blue text-pale-blue"
        >
          Weekly
        </button>
        <button
          onClick={() => {
            setTime("monthly");
          }}
          className="hover:text-pale-blue"
        >
          Monthly
        </button>
      </span>
    </div>
  );
};

export default User;
