import { useState } from "react";

export default function useFavorite(currentIsFavorite: boolean) {
    const [isFavorite, setisFavorite] = useState(currentIsFavorite);

    const toggleFavorite = async () => {
        setisFavorite(!isFavorite);

        // POST Request here
    }
    return {
        isFavorite,
        toggleFavorite
    }
}