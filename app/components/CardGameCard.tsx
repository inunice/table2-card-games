import { Heart } from 'lucide-react';

interface CardGameProps {
    cardGame: CardGame;
}

export default function CardGameCard({cardGame}: CardGameProps) {
    return (
        <div className="">
            <div className="flex flex-col px-4 py-4 bg-muted rounded-t-xl">
                <span className="text-lg font-semibold text-wood">{cardGame.name}</span>
                <span className="text-wood-muted">{cardGame.description}</span>
            </div>
            <div className="flex flex-row justify-end bg-wood rounded-b-xl px-4 py-2">
                <Heart size={18} className="text-white" />
                <Heart size={18} className="text-coral fill-current" />
            </div>
        </div>
    );
}