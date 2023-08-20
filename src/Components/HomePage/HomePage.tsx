import "./HomePage.css";
import SlideShow from "./Components/SlideShow";
import SwiperElement from "./Components/Swiper";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [newHouses, setNewHouses] = useState<any>([]);
  const [bestOffer, setBestOffer] = useState<any>([]);
  const [newlyBuilt, setNewlyBuilt] = useState<any>([]);

  useEffect(() => {
      const url = `${process.env.REACT_APP_RUN_ENVIRONMENT}post/?page=1`
    fetch(url)
      .then((res) => res.json())
      .then((response) => setNewHouses(response.posts));
    fetch(
      `${url}&community=Կենտրոն`
    )
      .then((res) => res.json())
      .then((response) => setBestOffer(response.posts));
    fetch(
      `${url}&building_type=Նորակառույց`
    )
      .then((res) => res.json())
      .then((response) => setNewlyBuilt(response.posts));
  }, []);

  return (
    <>
      <SlideShow />
      <SwiperElement homes={newHouses} heading={"NEW"} />
      <SwiperElement homes={bestOffer} heading={"BEST_OFFERS!"} />
      <SwiperElement homes={newlyBuilt} heading={"Newly_Built"} />
    </>
  );
};

export default HomePage;
