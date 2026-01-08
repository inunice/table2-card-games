import CardGameCard from "./components/CardGameCard"

import { Dices } from 'lucide-react';

const data: CardGame[] = [
    {
        "id": 1,
        "name": "Flip 7",
        "description": "Six Seven!",
        "isFavorite": true
    },
    {
        "id": 2,
        "name": "Uno No Mercy",
        "description": "Sad uno",
        "isFavorite": false
    },
        {
        "id": 1,
        "name": "Flip 7",
        "description": "Six Seven!",
        "isFavorite": true
    },
    {
        "id": 2,
        "name": "Uno No Mercy",
        "description": "Sad uno",
        "isFavorite": false
    },
        {
        "id": 3,
        "name": "Flip 67",
        "description": "Six Ten!",
        "isFavorite": true
    },
    {
        "id": 4,
        "name": "Uno With Mercy",
        "description": "Happy uno",
        "isFavorite": true
    }
]

export default function Home() {

  // function isFavorite(current: CardGame) {
  //   return current.isFavorite === true;
  // }

  // function filterFavorites =  {
  //     return data.filter((current) => current.isFavorite === true);
  // }

  return (
    <div className="flex flex-col mx-20 my-12 gap-5">

      <div className="flex flex-row justify-center items-center gap-1">
        <Dices size={32} className="text-ocean" />
        <span className="text-3xl font-bold text-coral">Janine's Card Games</span>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
      {data.map((cardGame) => (
        <CardGameCard cardGame={cardGame} key={cardGame.id}/>
      ))}
      </div>
    </div>
  );
}
