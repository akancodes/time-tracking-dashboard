const User = ({ name }) => {
  return (
    <div>
      <span className="flex items-center justify-center bg-custom-blue space-x-4 p-6 rounded-lg translate-y-2">
        <img
          src="images/image-jeremy.png"
          alt="jeremy"
          className="border-4 rounded-full w-20"
        />
        <span>
          <p>Report for</p>
          <p className="text-xl font-light font-Rubik">{name}</p>
        </span>
      </span>
      <span className="flex space-x-20 text-lg justify-center bg-dark-blue py-3 pt-5 rounded-b-lg text-desaturated-blue">
        <a href="#">Daily</a>
        <a href="#" className="text-pale-blue">
          Weekly
        </a>
        <a href="#">Monthly</a>
      </span>
    </div>
  );
};

export default User;
