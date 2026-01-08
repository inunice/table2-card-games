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
    }
]

export default function Home() {
  return (
    <div className="">
      <span>Janine's Card Games</span>
      {data.map((cardGame) => (
        <CardGameCard cardGame={cardGame}/>
      ))}
    </div>
  );
}
