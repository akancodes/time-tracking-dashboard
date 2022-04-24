import Card from "./Card";

import { MainContext, useContext } from "../../context/mainContext";

const CardList = ({ data }) => {
  const { time } = useContext(MainContext);

  return (
    <>
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={card.image}
          color={card.color}
          timeframes={card.timeframes}
        />
      ))}
    </>
  );
};

export default CardList;
