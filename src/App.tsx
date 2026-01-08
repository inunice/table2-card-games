import CardGameCard from "./components/CardGameCard"
import AddGameForm from "./components/AddGameForm"
import { cardService } from "./services/cardService";
import { useState, useEffect } from "react";
import { Loader } from 'lucide-react';

import { Dices } from 'lucide-react';

export default function Home() {

  const [loading, setLoading] = useState(true);

  // function isFavorite(current: CardGame) {
  //   return current.isFavorite === true;
  // }

  // function filterFavorites =  {
  //     return data.filter((current) => current.isFavorite === true);
  // }

  const [data, setData] = useState<CardGame[]>([]);

  useEffect(() => {
    const fetchCardGames = async () => {
      try {
        setLoading(true);
        const res = await cardService.getAll();
        console.log(res);
        setData(res);
      }
      catch (err) {
        // setError(err.message);
      }
      finally {
        setLoading(false);
      }
    };

    fetchCardGames();
  }, []); 

  const handleNewGame = (newGame: CardGame) => {
    setData((prevData) => [newGame, ...prevData]);
  };

  return (
    <div className="flex flex-col sm:mx-36 mx-2 my-12 gap-10">
      <div className="flex flex-row items-center justify-center items-center gap-1">
        <Dices size={28} className="text-ocean" />
        <span className="sm:text-3xl text-xl font-bold text-coral">Janine's Card Games</span>
      </div>
      {loading && <div className="flex flex-col justify-center items-center gap-2">
        <Loader className="animate-spin" />
        <span className="text-2xl font-semibold text-wood">Loading...</span>
      </div>}
      <div className="grid sm:grid-cols-4 gap-4 grid-cols-2">
      {data.map((cardGame) => (
        <CardGameCard cardGame={cardGame}/>
      ))}
      </div>

      {!loading && <div>
        <AddGameForm onGameAdded={handleNewGame}/>
      </div>}
    </div>
  );
}
