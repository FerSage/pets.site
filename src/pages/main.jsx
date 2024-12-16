import React, { useEffect } from "react";
import Slider from "../components/Slider";
import FAC from "../components/FAC";
import SubscriptionForm from "../components/SubscriptionForm";

const Main = () => {
  useEffect(() => {

    return () => {
    };
  }, []);

  return (
    <main style={{ minHeight: "70vh" }}>
      <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
      <Slider />
      <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
      <FAC />
      <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
      <SubscriptionForm />
    </main>
  );
};

export default Main;
