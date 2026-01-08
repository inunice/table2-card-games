import CardGameCard from "./components/CardGameCard"
import { cardService } from "./services/cardService";
import { useState, useEffect } from "react";

import { Dices } from 'lucide-react';

export default function Home() {

  // function isFavorite(current: CardGame) {
  //   return current.isFavorite === true;
  // }

  // function filterFavorites =  {
  //     return data.filter((current) => current.isFavorite === true);
  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCardGames = async () => {
      try {
        // setLoading(true);
        const res = await cardService.getAll();
        console.log(res);
        setData(res);
      }
      catch (err) {
        // setError(err.message);
      }
      // finally {
      //   setLoading(false);
      // }
    };

    fetchCardGames();
  }, []); 

  return (
    <div className="flex flex-col mx-20 my-12 gap-5">

      <div className="flex flex-row justify-center items-center gap-1">
        <Dices size={32} className="text-ocean" />
        <span className="text-3xl font-bold text-coral">Janine's Card Games</span>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
      {data.map((cardGame) => (
        <CardGameCard cardGame={cardGame}/>
      ))}
      </div>
    </div>
  );
}
