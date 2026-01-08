import FavoriteButton from "./FavoriteButton";
import useFavorite from "hooks/useFavorite"

interface CardGameProps {
    cardGame: CardGame;
}

export default function CardGameCard({cardGame}: CardGameProps) {

    const {isFavorited, toggleFavorite} = useFavorite();

    return (
        <div className="">
            <div className="flex flex-col px-4 py-4 bg-muted rounded-t-xl">
                <span className="text-lg font-semibold text-wood">{cardGame.name}</span>
                <span className="text-wood-muted">{cardGame.description}</span>
            </div>
            <div className="flex flex-row justify-end bg-wood rounded-b-xl px-4 py-2">
                <FavoriteButton isFavorited={isFavorited} onToggle={toggleFavorite} />
            </div>
        </div>
    );
}