interface CardGameProps {
    cardGame: CardGame;
}

export default function CardGameCard({cardGame}: CardGameProps) {
    return (
        <div>
            <span>{cardGame.name}</span>
            <span>{cardGame.description}</span>
        </div>
    );
}