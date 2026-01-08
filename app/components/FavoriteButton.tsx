import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
    isFavorited: boolean;
    onToggle: (nextValue: boolean) => void;
}

export default function FavoriteButton({isFavorited, onToggle}: FavoriteButtonProps) {
    return (
        <button
        onClick={() => onToggle(!isFavorited)}>
            <Heart size={18} className={`${isFavorited ? 'text-coral fill-current' : 'text-white'}`} />
        </button>
    );
}
