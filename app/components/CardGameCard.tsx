interface CardGameProps {
    cardGame: CardGame;
}

export default function CardGameCard({cardGame}: CardGameProps) {
    return (
        <div className="flex flex-col px-4 py-4 bg-muted rounded-xl">
            <span className="text-lg font-semibold text-wood">{cardGame.name}</span>
            <span className="text-wood-muted">{cardGame.description}</span>
        </div>
    );
}