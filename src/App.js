import User from "./components/User";
import CardList from "./components/Card/CardList";

import DummyData from "./data.json";
import { MainContext } from "./context/mainContext";
import { useState } from "react";

function App() {
  const [time, setTime] = useState("daily");

  const contextData = {
    time,
    setTime,
  };

  return (
    <MainContext.Provider value={contextData}>
      <div className="flex h-screen justify-center items-center">
        <section className="xl:container mx-auto sm:p-8 grid grid-rows-7 md:grid-rows-2 md:grid-cols-4 md:gap-6">
          <User name={"Jeremy Robson"} />
          <CardList data={DummyData} />
        </section>
      </div>
    </MainContext.Provider>
  );
}

export default App;
