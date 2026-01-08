import FavoriteButton from "./FavoriteButton";
import useFavorite from "../hooks/useFavorite"

interface CardGameProps {
    cardGame: CardGame;
}
export default function CardGameCard({cardGame}: CardGameProps) {

    const {isFavorite, toggleFavorite} = useFavorite(cardGame.id, cardGame.isFavorite);

    return (
        <div className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
            <div className="rounded-t-xl w-full">
                <img className="w-full h-full aspect-square object-cover rounded-t-xl" src={cardGame.image || "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1577650146.jpg?q=w_2000,c_fill/f_webp"}/>
            </div>
            <div className="flex flex-col px-4 py-4 bg-muted">
                <span className="text-lg font-semibold text-wood line-clamp-1">{cardGame.name}</span>
                <span className="text-wood-muted line-clamp-1">{cardGame.description}</span>
            </div>
            <div className="flex flex-row justify-end bg-wood rounded-b-xl px-4 py-2">
                <FavoriteButton isFavorited={isFavorite} onToggle={toggleFavorite} />
            </div>
        </div>
    );
}