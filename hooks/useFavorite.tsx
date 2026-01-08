import { useState } from "react";

export default function useFavorite() {
    const [isFavorited, setIsFavorited] = useState(true);

    const toggleFavorite = async () => {
        setIsFavorited(!isFavorited);

        // POST Request here
    }
    return {
        isFavorited,
        toggleFavorite
    }
}