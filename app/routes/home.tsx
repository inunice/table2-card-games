import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

import CardGameCard from "../components/CardGameCard"

const data: CardGame[] = [
    {
        "id": 1,
        "name": "Flip 7",
        "description": "Six Seven!"
    },
    {
        "id": 2,
        "name": "Uno No Mercy",
        "description": "Sad uno"
    },
        {
        "id": 1,
        "name": "Flip 7",
        "description": "Six Seven!"
    },
    {
        "id": 2,
        "name": "Uno No Mercy",
        "description": "Sad uno"
    },
        {
        "id": 3,
        "name": "Flip 67",
        "description": "Six Ten!"
    },
    {
        "id": 4,
        "name": "Uno With Mercy",
        "description": "Happy uno"
    }
]

export default function Home() {
  return (
    <div className="flex flex-col mx-20 my-12 gap-5">
      <span className="text-3xl font-bold text-coral">Janine's Card Games</span>
      <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
      {data.map((cardGame) => (
        <CardGameCard cardGame={cardGame} key={cardGame.id}/>
      ))}
      </div>
    </div>
  );
}
